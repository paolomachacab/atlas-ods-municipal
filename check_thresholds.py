import sys, io, openpyxl
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

files = [
    'data/indicadores/03_07_02_11_tfa.xlsx',
    'data/indicadores/05_01_01_04_pgp.xlsx',
    'data/indicadores/05_04_01_01_phc.xlsx',
    'data/indicadores/08_05_02_02_tgh.xlsx',
    'data/indicadores/08_05_02_03_tgm.xlsx',
]

for f in files:
    code = f.split('/')[-1].replace('.xlsx', '')
    wb = openpyxl.load_workbook(f, data_only=True)
    if 'Umbral' not in wb.sheetnames:
        print(f"{code}: NO Umbral sheet")
        continue
    ws = wb['Umbral']
    rows = list(ws.iter_rows(values_only=True))
    # Row 0 = headers, Row 1 = data
    if len(rows) < 2:
        print(f"{code}: Umbral sheet empty")
        continue
    r = rows[1]
    # Columns: 0=code, 1=name, 2=meta_max, 3=meta_min, 4=prox_max, 5=prox_min, 6=ret_max, 7=ret_min, 8=gr_max, 9=gr_min
    meta_max  = r[2]; meta_min  = r[3]
    prox_max  = r[4]; prox_min  = r[5]
    ret_max   = r[6]; ret_min   = r[7]
    gr_max    = r[8]; gr_min    = r[9]
    print(f"{code}:")
    print(f"  meta:    max={meta_max}, min={meta_min}")
    print(f"  proximo: max={prox_max}, min={prox_min}")
    print(f"  retos:   max={ret_max}, min={ret_min}")
    print(f"  grandes: max={gr_max}, min={gr_min}")
