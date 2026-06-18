import sys, io, json, openpyxl

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# ODS that appear in the atlas (skipping 12 and 14)
ODS_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17]

def safe_float(val):
    if val is None:
        return None
    try:
        return round(float(val), 2)
    except Exception:
        return None

def safe_int(val):
    if val is None:
        return None
    try:
        return int(float(str(val)))
    except Exception:
        return None

path = sys.argv[1]
wb = openpyxl.load_workbook(path, data_only=True)
# Support both accented and non-accented sheet names
sheet_name = next(
    (s for s in wb.sheetnames if 'ndices municipales' in s.lower()),
    None
)
if sheet_name is None:
    raise KeyError(f"No sheet matching 'ndices municipales' found. Available: {wb.sheetnames}")
ws = wb[sheet_name]

data = {}

# Row 4 (0-indexed) = headers = openpyxl row 5
# Row 5+ (0-indexed) = data   = openpyxl row 6+
for row in ws.iter_rows(min_row=6, values_only=True):
    codigo = row[0]
    if codigo is None:
        continue

    # Normalize código to string without decimal point
    try:
        codigo_str = str(int(float(str(codigo))))
    except Exception:
        codigo_str = str(codigo).strip()

    municipio  = str(row[1]).strip() if row[1] is not None else ''
    poblacion  = safe_int(row[2])
    # col 3 = tasa urbanizacion (skip)
    ranking_v1 = safe_int(row[4])
    ranking_v2 = safe_int(row[5])
    ids_v1     = safe_float(row[6])
    ids_v2     = safe_float(row[7])
    cambio_rank = safe_int(row[8])
    cambio_ids  = safe_float(row[9])

    # cols 10-39: 15 ODS × 2 (v1, v2)
    ids_ods = {}
    for i, ods_num in enumerate(ODS_LIST):
        col_v1 = 10 + i * 2
        col_v2 = 10 + i * 2 + 1
        ids_ods[str(ods_num)] = {
            "v1": safe_float(row[col_v1]),
            "v2": safe_float(row[col_v2])
        }

    data[codigo_str] = {
        "municipio":   municipio,
        "poblacion":   poblacion,
        "ranking_v1":  ranking_v1,
        "ranking_v2":  ranking_v2,
        "ids_v1":      ids_v1,
        "ids_v2":      ids_v2,
        "cambio_rank": cambio_rank,
        "cambio_ids":  cambio_ids,
        "ids_ods":     ids_ods
    }

json_str = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
output = f"const IDS_DATA = {json_str};"

out_path = sys.argv[2] if len(sys.argv) > 2 else 'ids.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Written {len(data)} municipality entries to {out_path}")
