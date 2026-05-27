/**
 * ═══════════════════════════════════════════════════════════════
 *  ATLAS TERRITORIAL BOLIVIA · script.js  v11
 * ═══════════════════════════════════════════════════════════════
 */
'use strict';

/* ══════ UMBRALES CENTRALIZADOS ══════ */
const ALL_THRESHOLDS = {
  '01_02_02_01_mpi': { meta:{max:0,min:0.015}, proximo:{max:0.015,min:0.13}, retos:{max:0.13,min:0.23}, grandes:{max:0.23,min:1} },
  '01_04_01_03_nbi': { meta:{max:0,min:15}, proximo:{max:15,min:32.5}, retos:{max:32.5,min:50}, grandes:{max:50,min:100} },
  '01_04_02_05_ssb': { meta:{max:100,min:85}, proximo:{max:85,min:68}, retos:{max:68,min:50}, grandes:{max:50,min:0} },
  '02_02_02_01_smu': { meta:{max:0,min:10}, proximo:{max:10,min:20}, retos:{max:20,min:30}, grandes:{max:30,min:100} },
  '02_02_02_02_dcn': { meta:{max:0,min:10}, proximo:{max:10,min:17.5}, retos:{max:17.5,min:25}, grandes:{max:25,min:100} },
  '02_02_02_03_osn': { meta:{max:0,min:6.2}, proximo:{max:6.2,min:7.9}, retos:{max:7.9,min:9.5}, grandes:{max:9.5,min:100} },
  '02_02_03_04_pam': { meta:{max:0,min:5}, proximo:{max:5,min:20}, retos:{max:20,min:40}, grandes:{max:40,min:100} },
  '02_03_01_05_pac': { meta:{max:999,min:10}, proximo:{max:10,min:2}, retos:{max:2,min:0}, grandes:{max:0,min:0} },
  '02_05_01_08_idp': { meta:{max:1,min:0.65}, proximo:{max:0.65,min:0.4}, retos:{max:0.4,min:0.2}, grandes:{max:0.2,min:0} },
  '03_01_02_02_cpp': { meta:{max:100,min:85}, proximo:{max:85,min:67.5}, retos:{max:67.5,min:50}, grandes:{max:50,min:0} },
  '03_02_01_03_tmi': { meta:{max:0,min:12}, proximo:{max:12,min:16}, retos:{max:16,min:20}, grandes:{max:20,min:115} },
  '03_02_01_04_tmn': { meta:{max:0,min:25}, proximo:{max:25,min:37.5}, retos:{max:37.5,min:50}, grandes:{max:50,min:283} },
  '03_03_01_05_vih': { meta:{max:0,min:0}, proximo:{max:0,min:353.65}, retos:{max:353.65,min:707.3}, grandes:{max:707.3,min:11516.4} },
  '03_03_02_06_tub': { meta:{max:0,min:16.7}, proximo:{max:16.7,min:36.7}, retos:{max:36.7,min:56.8}, grandes:{max:56.8,min:433.4} },
  '03_03_03_07_mal': { meta:{max:0,min:1}, proximo:{max:1,min:10}, retos:{max:10,min:50}, grandes:{max:50,min:165.7} },
  '03_03_05_08_tic': { meta:{max:0,min:0}, proximo:{max:0,min:0.7}, retos:{max:0.7,min:1.9}, grandes:{max:1.9,min:26} },
  '03_03_05_09_tid': { meta:{max:0,min:0}, proximo:{max:0,min:2}, retos:{max:2,min:4}, grandes:{max:4,min:190.2} },
  '03_07_02_11_tfa': { meta:{max:0,min:25}, proximo:{max:25,min:37.5}, retos:{max:37.5,min:50}, grandes:{max:50,min:999} },
  '04_01_02_01_ash': { meta:{max:0,min:3}, proximo:{max:3,min:4.5}, retos:{max:4.5,min:6}, grandes:{max:6,min:100} },
  '04_01_02_02_asm': { meta:{max:0,min:3}, proximo:{max:3,min:4.5}, retos:{max:4.5,min:6}, grandes:{max:6,min:100} },
  '04_02_02_03_pfp': { meta:{max:100,min:53.9}, proximo:{max:53.9,min:43.8}, retos:{max:43.8,min:33.8}, grandes:{max:33.8,min:0} },
  '04_03_04_04_pes': { meta:{max:100,min:17}, proximo:{max:17,min:10.5}, retos:{max:10.5,min:4}, grandes:{max:4,min:0} },
  '04_06_01_06_alf': { meta:{max:100,min:95}, proximo:{max:95,min:90}, retos:{max:90,min:85}, grandes:{max:85,min:0} },
  '04_10_01_07_pci': { meta:{max:100,min:96.9}, proximo:{max:96.9,min:69.6}, retos:{max:69.6,min:42.3}, grandes:{max:42.3,min:0} },
  '04_10_01_09_pcs': { meta:{max:100,min:96.9}, proximo:{max:96.9,min:69.6}, retos:{max:69.6,min:42.3}, grandes:{max:42.3,min:0} },
  '05_01_01_01_pga': { meta:{max:2,min:1}, proximo:{max:1,min:0.865}, retos:{max:0.865,min:0.73}, grandes:{max:0.73,min:0} },
  '05_01_01_03_pge': { meta:{max:2,min:1}, proximo:{max:1,min:0.85}, retos:{max:0.85,min:0.7}, grandes:{max:0.7,min:0} },
  '05_01_01_04_pgp': { meta:{max:1,min:0.8}, proximo:{max:0.8,min:0.7}, retos:{max:0.7,min:0.5}, grandes:{max:0.5,min:0} },
  '05_05_01_05_acm': { meta:{max:100,min:40}, proximo:{max:40,min:30}, retos:{max:30,min:20}, grandes:{max:20,min:0} },
  '05_07_02_06_ttm': { meta:{max:1,min:0.5}, proximo:{max:0.5,min:0.25}, retos:{max:0.25,min:0.05}, grandes:{max:0.05,min:0} },
  '06_01_01_01_cap': { meta:{max:100,min:98}, proximo:{max:98,min:89}, retos:{max:89,min:80}, grandes:{max:80,min:0} },
  '06_02_01_02_cas': { meta:{max:100,min:95}, proximo:{max:95,min:85}, retos:{max:85,min:75}, grandes:{max:75,min:0} },
  '06_03_01_03_tar': { meta:{max:100,min:50}, proximo:{max:50,min:32.5}, retos:{max:32.5,min:15}, grandes:{max:15,min:0} },
  '07_01_01_02_cae': { meta:{max:100,min:98}, proximo:{max:98,min:89}, retos:{max:89,min:80}, grandes:{max:80,min:0} },
  '07_01_02_03_elc': { meta:{max:100,min:85}, proximo:{max:85,min:67.5}, retos:{max:67.5,min:50}, grandes:{max:50,min:0} },
  '08_04_02_01_mcc': { meta:{max:0,min:4.6}, proximo:{max:4.6,min:13.6}, retos:{max:13.6,min:22.6}, grandes:{max:22.6,min:100} },
  '08_05_02_02_tgh': { meta:{max:100,min:85.8}, proximo:{max:85.8,min:80.2}, retos:{max:80.2,min:74.5}, grandes:{max:74.5,min:0} },
  '08_05_02_03_tgm': { meta:{max:100,min:66.5}, proximo:{max:66.5,min:55.1}, retos:{max:55.1,min:43.7}, grandes:{max:43.7,min:0} },
  '08_06_01_04_eth': { meta:{max:0,min:10}, proximo:{max:10,min:12.5}, retos:{max:12.5,min:15}, grandes:{max:15,min:100} },
  '08_06_01_05_etm': { meta:{max:0,min:10}, proximo:{max:10,min:12.5}, retos:{max:12.5,min:15}, grandes:{max:15,min:100} },
  '08_09_02_01_pot': { meta:{max:100,min:4.82}, proximo:{max:4.82,min:2.82}, retos:{max:2.82,min:0.818}, grandes:{max:0.818,min:0} },
  '08_10_02_07_dsb': { meta:{max:225,min:17.8}, proximo:{max:17.8,min:9.5}, retos:{max:9.5,min:1.2}, grandes:{max:1.2,min:0} },
  '09_01_01_01_vpc': { meta:{max:5,min:2}, proximo:{max:2,min:1}, retos:{max:1,min:0}, grandes:{max:0,min:0} },
  '09_08_01_01_ci':  { meta:{max:100,min:65}, proximo:{max:65,min:42.5}, retos:{max:42.5,min:20}, grandes:{max:20,min:0} },
  '09_08_01_05_drb': { meta:{max:3,min:2.41}, proximo:{max:2.41,min:0.58}, retos:{max:0.58,min:0.02}, grandes:{max:0.02,min:0} },
  '09_08_01_06_tfc': { meta:{max:100,min:75}, proximo:{max:75,min:57.5}, retos:{max:57.5,min:40}, grandes:{max:40,min:0} },
  '10_02_01_02_esp': { meta:{max:0,min:1.2}, proximo:{max:1.2,min:15.1}, retos:{max:15.1,min:29}, grandes:{max:29,min:100} },
  '10_02_01_03_pel': { meta:{max:1,min:0.979}, proximo:{max:0.979,min:0.772}, retos:{max:0.772,min:0.565}, grandes:{max:0.565,min:100} },
  '10_02_01_06_epd': { meta:{max:1,min:0.7}, proximo:{max:0.7,min:0.511}, retos:{max:0.511,min:0.323}, grandes:{max:0.323,min:0} },
  '10_02_01_08_tpm': { meta:{max:1,min:0.996}, proximo:{max:0.996,min:0.775}, retos:{max:0.775,min:0.553}, grandes:{max:0.553,min:0} },
  '10_04_02_04_gin': { meta:{max:0,min:0.31}, proximo:{max:0.31,min:0.4}, retos:{max:0.4,min:0.48}, grandes:{max:0.48,min:1} },
  '11_01_01_01_thm': { meta:{max:0,min:15}, proximo:{max:15,min:22.5}, retos:{max:22.5,min:30}, grandes:{max:30,min:100} },
  '11_01_01_02_ssb': { meta:{max:0,min:15}, proximo:{max:15,min:32.5}, retos:{max:32.5,min:50}, grandes:{max:50,min:100} },
  '11_01_01_03_ava': { meta:{max:100,min:49}, proximo:{max:49,min:31}, retos:{max:31,min:12}, grandes:{max:12,min:0} },
  '11_02_01_04_atc': { meta:{max:5366.29,min:93}, proximo:{max:93,min:49}, retos:{max:49,min:5}, grandes:{max:5,min:0} },
  '11_06_02_05_ica': { meta:{max:0,min:10}, proximo:{max:10,min:15}, retos:{max:15,min:25}, grandes:{max:25,min:31} },
  '12_04_01_01_ipr': { meta:{max:999,min:18.5}, proximo:{max:18.5,min:6.5}, retos:{max:6.5,min:0}, grandes:{max:0,min:0} },
  '12_04_02_02_srr': { meta:{max:100,min:90}, proximo:{max:90,min:50}, retos:{max:50,min:10}, grandes:{max:10,min:0} },
  '13_01_01_03_fec': { meta:{max:0,min:5}, proximo:{max:5,min:15}, retos:{max:15,min:30}, grandes:{max:30,min:444} },
  '13_02_02_02_epb': { meta:{max:0,min:2}, proximo:{max:2,min:3}, retos:{max:3,min:4}, grandes:{max:4,min:441.4} },
  '13_02_02_04_eci': { meta:{max:0,min:2}, proximo:{max:2,min:3}, retos:{max:3,min:4}, grandes:{max:4,min:1266.8} },
  '15_01_02_01_sap': { meta:{max:100,min:25}, proximo:{max:25,min:15}, retos:{max:15,min:5}, grandes:{max:5,min:0} },
  '15_02_01_05_tpb': { meta:{max:0,min:0}, proximo:{max:0,min:0.7}, retos:{max:0.7,min:2.1}, grandes:{max:2.1,min:100} },
  '15_05_02_02_pbd': { meta:{max:0,min:0.06}, proximo:{max:0.06,min:0.17}, retos:{max:0.17,min:0.3}, grandes:{max:0.3,min:4.32} },
  '15_05_02_03_pbi': { meta:{max:0,min:0.15}, proximo:{max:0.15,min:0.8}, retos:{max:0.8,min:1.4}, grandes:{max:1.4,min:62} },
  '16_01_01_01_thp': { meta:{max:0,min:1.31}, proximo:{max:1.31,min:2.35}, retos:{max:2.35,min:3.39}, grandes:{max:3.39,min:26.72} },
  '16_06_01_02_cep': { meta:{max:95,min:83.4}, proximo:{max:83.4,min:71.7}, retos:{max:71.7,min:60}, grandes:{max:60,min:0} },
  '16_07_02_03_tcs': { meta:{max:0,min:1}, proximo:{max:1,min:2}, retos:{max:2,min:3}, grandes:{max:3,min:100} },
  '16_09_01_04_nic': { meta:{max:100,min:95}, proximo:{max:95,min:90}, retos:{max:90,min:85}, grandes:{max:85,min:0} },
  '17_01_02_01_iil': { meta:{max:100,min:15}, proximo:{max:15,min:10}, retos:{max:10,min:5}, grandes:{max:5,min:0} },
  '17_18_01_02_ipc': { meta:{max:3753.428621495327,min:463.086709202649}, proximo:{max:463.086709202649,min:252.878939285507}, retos:{max:252.878939285507,min:42.67116936836493}, grandes:{max:42.67116936836493,min:0} },
};

/* ══════════════════════════════════════════════════════
   isAscending — función UNIFICADA para toda la aplicación
   ══════════════════════════════════════════════════════ */
function isAscending(thresholds) {
  if (!thresholds) return true;
  const t = thresholds;
  if (t.meta.max !== t.meta.min) return t.meta.max > t.meta.min;
  if (t.proximo.max !== t.proximo.min) return t.proximo.min <= t.proximo.max;
  return true;
}

const PERIOD_LABELS = {
  '01_02_02_01_mpi': { v1: 'IPM 2012', v2: 'IPM 2024' },
  '01_04_01_02_eep': { v1: 'Valor 2016', v2: 'Valor 2024' },
  '01_04_01_03_nbi': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '01_04_02_05_ssb': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '02_02_02_01_smu': { v1: 'Valor 2008', v2: 'Valor 2023' },
  '02_02_02_02_dcn': { v1: 'Valor 2008', v2: 'Valor 2023' },
  '02_02_02_03_osn': { v1: 'Valor 2008', v2: 'Valor 2023' },
  '02_02_03_04_pam': { v1: 'Valor 2008', v2: 'Valor 2023' },
  '02_03_01_05_pac': { v1: 'Promedio 2013-2015', v2: 'Promedio 2022-2024' },
  '02_05_01_08_idp': { v1: 'Promedio 2013-2015', v2: 'Promedio 2022-2024' },
  '03_01_02_02_cpp': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '03_02_01_03_tmi': { v1: 'Valor 2011', v2: 'Promedio anual 2019-2024' },
  '03_02_01_04_tmn': { v1: 'Valor 2011', v2: 'Promedio anual 2019-2024' },
  '03_03_01_05_vih': { v1: 'Promedio 2011-2013', v2: 'Promedio 2022-2024' },
  '03_03_02_06_tub': { v1: 'Promedio 2011-2013', v2: 'Promedio 2022-2024' },
  '03_03_03_07_mal': { v1: 'Promedio 2011-2013', v2: 'Promedio 2022-2024' },
  '03_03_05_08_tic': { v1: 'Promedio 2011-2013', v2: 'Promedio 2022-2024' },
  '03_03_05_09_tid': { v1: 'Promedio 2011-2013', v2: 'Promedio 2022-2024' },
  '03_07_02_11_tfa': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '04_01_02_01_ash': { v1: 'Promedio 2012-2014', v2: 'Promedio 2022-2024' },
  '04_01_02_02_asm': { v1: 'Promedio 2012-2014', v2: 'Promedio 2022-2024' },
  '04_02_02_03_pfp': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '04_03_04_04_pes': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '04_06_01_06_alf': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '04_10_01_07_pci': { v1: 'Promedio 2012-2014', v2: 'Promedio 2022-2024' },
  '04_10_01_09_pcs': { v1: 'Promedio 2012-2014', v2: 'Promedio 2022-2024' },
  '05_01_01_01_pga': { v1: 'Promedio 2012-2014', v2: 'Promedio 2022-2024' },
  '05_01_01_02_pgm': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '05_01_01_03_pge': { v1: '', v2: '' },
  '05_01_01_04_pgp': { v1: 'Valor 2013', v2: 'Valor 2025' },
  '05_05_01_05_acm': { v1: 'Valor 2015', v2: 'Valor 2021' },
  '05_07_02_06_ttm': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '06_01_01_01_cap': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '06_02_01_02_cas': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '06_03_01_03_tar': { v1: 'Valor 2013', v2: 'Valor 2024' },
  '07_01_01_01_cep': { v1: 'Valor 2016', v2: 'Valor 2024' },
  '07_01_01_02_cae': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '07_01_02_03_elc': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '07_02_01_04_ecp': { v1: 'Valor 2016', v2: 'Valor 2023' },
  '08_04_02_01_mcc': { v1: '', v2: '' },
  '08_05_02_02_tgh': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '08_05_02_03_tgm': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '08_06_01_04_eth': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '08_06_01_05_etm': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '08_09_02_01_pot': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '08_09_02_02_pbt': { v1: '', v2: '' },
  '08_10_02_07_dsb': { v1: 'Número de plataformas de atención…', v2: 'Número de plataformas de atención…' },
  '09_01_01_01_vpc': { v1: 'Cantidad 2012', v2: 'Cantidad 2024' },
  '09_08_01_01_ci': { v1: 'Cantidad 2012', v2: 'Cantidad 2024' },
  '09_08_01_05_drb': { v1: 'Cantidad 2012', v2: 'Cantidad 2024' },
  '09_08_01_06_tfc': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '10_02_01_01_dce': { v1: '', v2: '' },
  '10_02_01_02_esp': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '10_02_01_03_pel': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '10_02_01_06_epd': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '10_02_01_07_mre': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '10_02_01_08_tpm': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '10_04_02_04_gin': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '11_01_01_01_thm': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '11_01_01_02_ssb': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '11_01_01_03_ava': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '11_02_01_04_atc': { v1: 'Valor de asientos disponibles en…', v2: 'Valor de asientos disponibles en…' },
  '11_06_02_05_ica': { v1: 'Promedio anual 2010-2012', v2: 'Promedio anual 2021-2023' },
  '12_04_01_01_ipr': { v1: 'Promedio 2012-2014', v2: 'Promedio 2022-2024' },
  '12_04_02_02_srr': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '13_01_01_03_fec': { v1: 'Promedio del número de familias…', v2: 'Promedio del número de familias…' },
  '13_01_03_01_icc': { v1: '', v2: '' },
  '13_02_02_02_epb': { v1: 'Promedio 2011-2013', v2: 'Promedio (2021-2023)' },
  '13_02_02_03_ect': { v1: '', v2: '' },
  '13_02_02_04_eci': { v1: 'Promedio 2011-2013', v2: 'Promedio (2020-2022)' },
  '15_01_02_01_sap': { v1: 'Superficie total en hectáreas de…', v2: 'Superficie total en hectáreas de…' },
  '15_02_01_05_tpb': { v1: 'Promedio 2012-2014', v2: 'Promedio 2022-2024' },
  '15_05_02_02_pbd': { v1: 'Valor de riqueza de especies…', v2: 'Valor de riqueza de especies…' },
  '15_05_02_03_pbi': { v1: 'Valor de riqueza de especies…', v2: 'Valor de riqueza de especies…' },
  '16_01_01_01_thp': { v1: 'Promedio 2017-2019', v2: 'Promedio 2022-2024' },
  '16_06_01_02_cep': { v1: 'Promedio de porcentaje de…', v2: 'Promedio de porcentaje de…' },
  '16_07_02_03_tcs': { v1: 'Promedio 2018-2020', v2: 'Promedio 2022-2024' },
  '16_09_01_04_nic': { v1: 'Valor 2012', v2: 'Valor 2024' },
  '17_01_02_01_iil': { v1: 'Promedio 2011-2013 (0 para…', v2: 'Promedio 2021-2023 (valor 2024…' },
  '17_18_01_02_ipc': { v1: 'Valor 2017', v2: 'Valor 2024' },
};

/* ══════ MAPA DE DEPARTAMENTOS POR CÓDIGO ══════
   El primer dígito del código INE del municipio
   coincide con el ID del departamento.
   Ej: 31601 → "3" → Cochabamba
   ══════════════════════════════════════════════ */
const DEP_BY_CODE = {
  '1': 'Chuquisaca',
  '2': 'La Paz',
  '3': 'Cochabamba',
  '4': 'Oruro',
  '5': 'Potosí',
  '6': 'Tarija',
  '7': 'Santa Cruz',
  '8': 'Beni',
  '9': 'Pando',
};

function getDepartamento(munId) {
  if (!munId) return '—';
  const firstDigit = String(munId).trim().charAt(0);
  return DEP_BY_CODE[firstDigit] || '—';
}

/* ══════ FORMATO INTELIGENTE DE NÚMEROS ══════
   - Sin decimales si es entero
   - Hasta 4 decimales significativos para valores pequeños
   - 2 decimales para el resto
   ══════════════════════════════════════════ */
function fmtNum(v) {
  if (v === null || v === undefined || isNaN(v)) return '—';
  if (Number.isInteger(v) || v % 1 === 0) return v.toLocaleString('es-BO');
  if (Math.abs(v) < 0.01 && v !== 0) return v.toFixed(4);
  if (Math.abs(v) < 1)  return v.toFixed(3);
  return v.toFixed(2);
}

/* ══════ NAVIGATION ══════ */
function enterAtlas() {
  document.getElementById('landing-page').classList.add('hidden');
  document.getElementById('atlas-app').classList.remove('hidden');
}

function showView(view) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.nav-btn[onclick="showView('${view}')"]`).classList.add('active');
  document.getElementById('view-maps').classList.toggle('hidden', view !== 'maps');
  document.getElementById('view-table').classList.toggle('hidden', view !== 'table');
  document.getElementById('view-convergencia').classList.toggle('hidden', view !== 'convergencia');

  // Ocultar completamente el atlas-app (y sus mapas Leaflet) cuando se ve convergencia
  const atlasApp = document.getElementById('atlas-app');
  if (atlasApp) atlasApp.style.visibility = view === 'convergencia' ? 'hidden' : 'visible';

  if (view === 'table' && state.indicatorData) renderTable(state.indicatorData);
  if (view === 'convergencia' && state.indicatorData) renderConvergenciaView(state.indicatorData);
}

/* ══════ LEGEND PERIOD ══════ */
let legendPeriod = 'v1';
function setLegendPeriod(period) {
  legendPeriod = period;
  const b1 = document.getElementById('leg-btn-p1');
  const b2 = document.getElementById('leg-btn-p2');
  if (b1) b1.classList.toggle('active', period === 'v1');
  if (b2) b2.classList.toggle('active', period === 'v2');
  if (state.indicatorData) renderLegend(state.indicatorData);
}

/* ══════════════════════════════════════════════════════
   INDICATOR_FILES
   dir: 'asc' = mayor es mejor ↑ | 'desc' = menor es mejor ↓
   ══════════════════════════════════════════════════════ */
const INDICATOR_FILES = [
  { file: '01_02_02_01_mpi.xlsx', label: 'Índice de pobreza multidimensional',                                    dir: 'desc' },
  { file: '01_04_01_02_eep.xlsx', label: 'Tasa de pobreza energética',                                            dir: 'desc' },
  { file: '01_04_01_03_nbi.xlsx', label: 'Necesidades básicas insatisfechas',                                      dir: 'desc' },
  { file: '01_04_02_05_ssb.xlsx', label: 'Acceso a los 3 servicios básicos',                                       dir: 'asc'  },
  { file: '02_02_02_01_smu.xlsx', label: 'Obesidad en mujeres (15-49 años)',                                       dir: 'desc' },
  { file: '02_02_02_02_dcn.xlsx', label: 'Desnutrición crónica en niños menores de 5 años',                        dir: 'desc' },
  { file: '02_02_02_03_osn.xlsx', label: 'Sobrepeso en niños menores de 5 años',                                   dir: 'desc' },
  { file: '02_02_03_04_pam.xlsx', label: 'Prevalencia de anemia en mujeres (15-49 años)',                          dir: 'desc' },
  { file: '02_03_01_05_pac.xlsx', label: 'Producción agrícola per cápita',                                         dir: 'asc'  },
  { file: '02_05_01_08_idp.xlsx', label: 'Índice de diversificación productiva',                                   dir: 'asc'  },
  { file: '03_01_02_02_cpp.xlsx', label: 'Cobertura de partos por personal de salud calificado',                            dir: 'asc'  },
  { file: '03_02_01_03_tmi.xlsx', label: 'Tasa de mortalidad infantil (menores de 1 año)',                         dir: 'desc' },
  { file: '03_02_01_04_tmn.xlsx', label: 'Tasa de mortalidad en niños (menores de 5 años)',                        dir: 'desc' },
  { file: '03_03_01_05_vih.xlsx', label: 'Incidencia de VIH',                                                     dir: 'desc' },
  { file: '03_03_02_06_tub.xlsx', label: 'Incidencia de tuberculosis',                                             dir: 'desc' },
  { file: '03_03_03_07_mal.xlsx', label: 'Incidencia de malaria',                                                  dir: 'desc' },
  { file: '03_03_05_08_tic.xlsx', label: 'Tasa de infestación de chagas',                                          dir: 'desc' },
  { file: '03_03_05_09_tid.xlsx', label: 'Incidencia de dengue',                                                   dir: 'desc' },
  { file: '03_07_02_11_tfa.xlsx', label: 'Tasa de fecundidad en adolescentes (15-19 años)',                        dir: 'desc' },
  { file: '04_01_02_01_ash.xlsx', label: 'Tasa de abandono escolar en secundaria — hombres',                       dir: 'desc' },
  { file: '04_01_02_02_asm.xlsx', label: 'Tasa de abandono escolar en secundaria — mujeres',                       dir: 'desc' },
  { file: '04_02_02_03_pfp.xlsx', label: 'Niños de 4 a 5 años que asisten a preescolar',                           dir: 'asc'  },
  { file: '04_03_04_04_pes.xlsx', label: 'Población con educación superior (19 años o más)',                       dir: 'asc'  },
  { file: '04_06_01_06_alf.xlsx', label: 'Tasa de alfabetización (15 años o más)',                                 dir: 'asc'  },
  { file: '04_10_01_07_pci.xlsx', label: 'Profesores calificados en nivel inicial',                                dir: 'asc'  },
  { file: '04_10_01_09_pcs.xlsx', label: 'Profesores calificados en nivel secundario',                             dir: 'asc'  },
  { file: '05_01_01_01_pga.xlsx', label: 'Paridad de género en abandono escolar en secundaria',                    dir: 'asc'  },
  { file: '05_01_01_02_pgm.xlsx', label: 'Paridad de género en el índice de pobreza multidimensional',             dir: 'asc'  },
  { file: '05_01_01_03_pge.xlsx', label: 'Paridad de género en años de educación de jóvenes',                      dir: 'asc'  },
  { file: '05_01_01_04_pgp.xlsx', label: 'Paridad de género en la tasa global de participación',                   dir: 'asc'  },
  { file: '05_05_01_05_acm.xlsx', label: 'Porcentaje de concejales mujeres',                                       dir: 'asc'  },
  { file: '05_07_02_06_ttm.xlsx', label: 'Derechos de la mujer a propiedad y control de tierras',                  dir: 'asc'  },
  { file: '06_01_01_01_cap.xlsx', label: 'Cobertura de agua potable',                                             dir: 'asc'  },
  { file: '06_02_01_02_cas.xlsx', label: 'Cobertura de saneamiento',                                              dir: 'asc'  },
  { file: '06_03_01_03_tar.xlsx', label: 'Tratamiento de aguas residuales',                                        dir: 'asc'  },
  { file: '07_01_01_01_cep.xlsx', label: 'Consumo de electricidad residencial per cápita',                         dir: 'asc'  },
  { file: '07_01_01_02_cae.xlsx', label: 'Cobertura de energía eléctrica',                                        dir: 'asc'  },
  { file: '07_01_02_03_elc.xlsx', label: 'Energía limpia para cocinar',                                           dir: 'asc'  },
  { file: '07_02_01_04_ecp.xlsx', label: 'Emisiones de CO2 per cápita por energía',                               dir: 'desc' },
  { file: '08_04_02_01_mcc.xlsx', label: 'Medidores eléctricos residenciales con consumo cero',                    dir: 'desc' },
  { file: '08_05_02_02_tgh.xlsx', label: 'Tasa global de participación — hombres (14 años o más)',                 dir: 'asc'  },
  { file: '08_05_02_03_tgm.xlsx', label: 'Tasa global de participación — mujeres (14 años o más)',                 dir: 'asc'  },
  { file: '08_06_01_04_eth.xlsx', label: 'Hombres que no estudian ni trabajan (15-24 años)',                       dir: 'desc' },
  { file: '08_06_01_05_etm.xlsx', label: 'Mujeres que no estudian ni trabajan (15-24 años)',                       dir: 'desc' },
  { file: '08_09_02_01_pot.xlsx', label: 'Población ocupada en actividades de turismo',                            dir: 'asc'  },
  { file: '08_09_02_02_pbt.xlsx', label: 'Porcentaje del PIB correspondiente al turismo',                          dir: 'asc'  },
  { file: '08_10_02_07_dsb.xlsx', label: 'Densidad de sucursales bancarias',                                      dir: 'asc'  },
  { file: '09_01_01_01_vpc.xlsx', label: 'Vías fundamentales que pasan por el municipio',                          dir: 'asc'  },
  { file: '09_08_01_01_ci.xlsx',  label: 'Cobertura de hogares con internet',                                     dir: 'asc'  },
  { file: '09_08_01_05_drb.xlsx', label: 'Densidad de radiobases',                                                dir: 'asc'  },
  { file: '09_08_01_06_tfc.xlsx', label: 'Cobertura de telefonía fija o celular',                                  dir: 'asc'  },
  { file: '10_02_01_01_dce.xlsx', label: 'Desigualdad en el consumo de electricidad entre hogares',                dir: 'desc' },
  { file: '10_02_01_02_esp.xlsx', label: 'Población que no habla español',                                        dir: 'desc' },
  { file: '10_02_01_03_pel.xlsx', label: 'Brecha de pobreza multidimensional según etnia',                           dir: 'asc'  },
  { file: '10_02_01_06_epd.xlsx', label: 'Brecha educativa para personas con discapacidad',                        dir: 'asc'  },
  { file: '10_02_01_07_mre.xlsx', label: 'Brecha de pobreza migrantes/no migrantes',                              dir: 'asc'  },
  { file: '10_02_01_08_tpm.xlsx', label: 'Brecha de pobreza hogares con jefe adulto mayor',                        dir: 'asc'  },
  { file: '10_04_02_04_gin.xlsx', label: 'Coeficiente de Gini de años de educación',                               dir: 'desc' },
  { file: '11_01_01_01_thm.xlsx', label: 'Tasa de hacinamiento',                                                  dir: 'desc' },
  { file: '11_01_01_02_ssb.xlsx', label: 'Hogares sin servicio sanitario o baño',                                  dir: 'desc' },
  { file: '11_01_01_03_ava.xlsx', label: 'Porcentaje de viviendas adecuadas',                                     dir: 'asc'  },
  { file: '11_02_01_04_atc.xlsx', label: 'Asientos disponibles en transporte colectivo',                           dir: 'asc'  },
  { file: '11_06_02_05_ica.xlsx', label: 'Concentración media anual de PM2.5',                                    dir: 'desc' },
  { file: '12_04_01_01_ipr.xlsx', label: 'Inversión pública en residuos sólidos per cápita',                      dir: 'asc'  },
  { file: '12_04_02_02_srr.xlsx', label: 'Población con recolección de residuos',                                  dir: 'asc'  },
  { file: '13_01_01_03_fec.xlsx', label: 'Familias afectadas por eventos climáticos',                              dir: 'desc' },
  { file: '13_01_03_01_icc.xlsx', label: 'Índice de vulnerabilidad al cambio climático',                           dir: 'desc' },
  { file: '13_02_02_02_epb.xlsx', label: 'Emisiones de CO2 por pérdida de bosque per cápita',                     dir: 'desc' },
  { file: '13_02_02_03_ect.xlsx', label: 'Emisiones de CO2 por transporte per cápita',                            dir: 'desc' },
  { file: '13_02_02_04_eci.xlsx', label: 'Emisiones de CO2 por incendios per cápita',                             dir: 'desc' },
  { file: '15_01_02_01_sap.xlsx', label: 'Superficie en áreas protegidas',                                        dir: 'asc'  },
  { file: '15_02_01_05_tpb.xlsx', label: 'Tasa promedio de pérdida de bosque',                                    dir: 'desc' },
  { file: '15_05_02_02_pbd.xlsx', label: 'Índice de pérdida de biodiversidad por deforestación',                  dir: 'desc' },
  { file: '15_05_02_03_pbi.xlsx', label: 'Índice de pérdida de biodiversidad por incendios',                      dir: 'desc' },
  { file: '16_01_01_01_thp.xlsx', label: 'Tasa de homicidios',                                                    dir: 'desc' },
  { file: '16_06_01_02_cep.xlsx', label: 'Capacidad de ejecución del presupuesto programado',                     dir: 'asc'  },
  { file: '16_07_02_03_tcs.xlsx', label: 'Tasa de conflictividad social',                                         dir: 'desc' },
  { file: '16_09_01_04_nic.xlsx', label: 'Niños inscritos en el registro civil',                                  dir: 'asc'  },
  { file: '17_01_02_01_iil.xlsx', label: 'Proporción de ingresos municipales de fuentes locales',                 dir: 'asc'  },
  { file: '17_18_01_02_ipc.xlsx', label: 'Inversión pública per cápita',                                          dir: 'asc'  },
];

const INDICATOR_DIR_MAP = {};
const INDICATOR_THRESHOLD_KEY_MAP = {};
for (const ind of INDICATOR_FILES) {
  const base = ind.file.replace('.xlsx', '');
  INDICATOR_DIR_MAP[base] = ind.dir;
  if (ind.thresholdKey) INDICATOR_THRESHOLD_KEY_MAP[ind.label] = ind.thresholdKey;
}

function getIndicatorDir(data) {
  if (!data) return 'asc';
  return INDICATOR_DIR_MAP[data.indicatorCode] || (isAscending(data.thresholds) ? 'asc' : 'desc');
}

const DATA_PATH   = 'data/indicadores/';
const GEOJSON_MUN = 'data/geojson/municipios.geojson';

const ODS_COLORS = {
  meta: '#29b158', proximo: '#ebc849', retos: '#ec8444', grandes: '#e04350', sin: '#d1d5db',
};

const FIELD_CANDIDATES = {
  id:   ['Codigo_INE','codigo_ine','CODIGO_INE','COD','cod','COD_MUN','cod_mun','CODMUN','codmun','INE','ine','CODIGO','codigo','ID','id','OBJECTID','GID'],
  name: ['Municipio','MUNICIPIO','municipio','NOM_MUN','nom_mun','NOMBRE','nombre','DEP_MUN_TI','NAME','name','NOM','nom'],
};

function detectFields(geojson) {
  if (!geojson?.features?.length) return { idField: 'id', nameField: 'name' };
  const props = geojson.features[0].properties;
  const keys  = Object.keys(props);
  const idField   = FIELD_CANDIDATES.id.find(c => keys.includes(c))   || keys[0];
  const nameField = FIELD_CANDIDATES.name.find(c => keys.includes(c)) || keys[1] || keys[0];
  console.log(`[Atlas] Campos → id:"${idField}" nombre:"${nameField}"`);
  return { idField, nameField };
}

let GEO_FIELDS = { idField: 'id', nameField: 'name' };
const BOLIVIA_BOUNDS = [[-23.0, -69.7], [-9.6, -57.4]];

const state = {
  level: 'municipal', currentFile: null, indicatorData: null,
  geoMun: null, geoDep: null, layerLeft: null, layerRight: null,
  selectedId: null, isSyncing: false,
};

/* ══════ Modo de tabla: 'indicator' o 'absolute' ══════ */
let tableMode = 'indicator';

const $ = id => document.getElementById(id);
const dom = {
  get indicatorSelect() { return $('indicator-select'); },
  get munSearch()       { return $('municipality-search'); },
  get searchResults()   { return $('search-results'); },
  get legendContainer() { return $('legend-container'); },
  get statsSection()    { return $('stats-section'); },
  get statsContainer()  { return $('stats-container'); },
  get munInfoSection()  { return $('mun-info-section'); },
  get munInfoCard()     { return $('mun-info-card'); },
  get loadingOverlay()  { return $('loading-overlay'); },
  get loadingText()     { return $('loading-text'); },
  get tooltip()         { return $('map-tooltip'); },
  get colLabelLeft()    { return $('col-label-left'); },
  get colLabelRight()   { return $('col-label-right'); },
  get btnMunicipal()    { return $('btn-municipal'); },
  get btnExport()       { return $('btn-export'); },
  get btnFullscreen()   { return $('btn-fullscreen'); },
  get analysisPanel()   { return $('analysis-panel'); },
};

let mapLeft, mapRight;

function initMaps() {
  const tileUrl  = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
  const tileOpts = { attribution: '©OSM ©Carto', subdomains: 'abcd', maxZoom: 19 };
  const bounds   = L.latLngBounds(BOLIVIA_BOUNDS[0], BOLIVIA_BOUNDS[1]);
  mapLeft  = L.map('map-left',  { zoomControl: true,  attributionControl: false, maxBounds: bounds.pad(0.3) }).fitBounds(bounds);
  mapRight = L.map('map-right', { zoomControl: false, attributionControl: false, maxBounds: bounds.pad(0.3) }).fitBounds(bounds);
  L.tileLayer(tileUrl, tileOpts).addTo(mapLeft);
  L.tileLayer(tileUrl, tileOpts).addTo(mapRight);
  mapLeft.on('move',  () => syncMap(mapLeft,  mapRight));
  mapRight.on('move', () => syncMap(mapRight, mapLeft));
}

function syncMap(source, target) {
  if (state.isSyncing) return;
  state.isSyncing = true;
  target.setView(source.getCenter(), source.getZoom(), { animate: false });
  state.isSyncing = false;
}

async function loadGeoJSON() {
  setLoading(true, 'Cargando geometrías territoriales…');
  try {
    const res = await fetch(GEOJSON_MUN + '?v=' + Date.now());
    if (res.ok) {
      const text = await res.text();
      try {
        state.geoMun = JSON.parse(text);
        GEO_FIELDS   = detectFields(state.geoMun);
        console.log('[Atlas] GeoJSON OK:', state.geoMun.features.length, 'features');
      } catch (e) {
        console.error('[Atlas] JSON parse error:', e.message);
        state.geoMun = null;
      }
    }
  } catch (e) { state.geoMun = null; }
  state.geoDep = null;
  setLoading(false);
}

async function loadAvailableIndicators() {
  dom.indicatorSelect.innerHTML = '<option value="">— Verificando indicadores… —</option>';
  const ODS_NAMES = {
    '01':'ODS 1 · Fin de la pobreza',
    '02':'ODS 2 · Hambre cero',
    '03':'ODS 3 · Salud y bienestar',
    '04':'ODS 4 · Educación de calidad',
    '05':'ODS 5 · Igualdad de género',
    '06':'ODS 6 · Agua limpia y saneamiento',
    '07':'ODS 7 · Energía asequible y no contaminante',
    '08':'ODS 8 · Trabajo decente y crecimiento económico',
    '09':'ODS 9 · Industria, innovación e infraestructura',
    '10':'ODS 10 · Reducción de las desigualdades',
    '11':'ODS 11 · Ciudades y comunidades sostenibles',
    '12':'ODS 12 · Producción y consumo responsables',
    '13':'ODS 13 · Acción por el clima',
    '15':'ODS 15 · Vida de ecosistemas terrestres',
    '16':'ODS 16 · Paz, justicia e instituciones sólidas',
    '17':'ODS 17 · Alianzas para lograr los objetivos',
  };

  // Verificar qué archivos existen con HEAD en paralelo
  const checks = await Promise.all(
    INDICATOR_FILES.map(async (ind, globalIdx) => {
      try {
        const res = await fetch(DATA_PATH + ind.file, { method: 'HEAD' });
        return res.ok ? { ind, globalIdx } : null;
      } catch { return null; }
    })
  );
  const available = checks.filter(Boolean);

  dom.indicatorSelect.innerHTML = '<option value="">— Seleccionar indicador —</option>';

  const groups = {};
  for (const { ind, globalIdx } of available) {
    const ods = ind.file.split('_')[0];
    if (!groups[ods]) groups[ods] = [];
    groups[ods].push({ ind, globalIdx });
  }
  for (const ods of Object.keys(groups).sort()) {
    const grp = document.createElement('optgroup');
    grp.label = ODS_NAMES[ods] || ('ODS ' + parseInt(ods));
    for (const { ind, globalIdx } of groups[ods]) {
      const opt = document.createElement('option');
      opt.value = ind.file;
      opt.textContent = ind.label;
      opt.dataset.idx = globalIdx;
      grp.appendChild(opt);
    }
    dom.indicatorSelect.appendChild(grp);
  }

  console.log(`[Atlas] ${available.length} de ${INDICATOR_FILES.length} indicadores disponibles`);
  return available;
}

async function readExcel(filename, thresholdKey) {
  setLoading(true, `Leyendo datos: ${filename}…`);
  const url = DATA_PATH + filename;
  let workbook;
  try {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    workbook  = XLSX.read(buf, { type: 'array' });
  } catch (e) {
    console.error('Error cargando Excel:', e);
    setLoading(false);
    return null;
  }

  const result = {
    mun: new Map(), dep: new Map(), thresholds: null,
    colLabels: { v1: '2012', v2: '2024' },
    absLabels: { v1: '', v2: '' },    // etiquetas de valores absolutos
    hasAbsolute: false,               // ¿tiene columnas de valor absoluto?
    indicatorName: '', indicatorCode: '',
  };
  result.indicatorCode = filename.replace('.xlsx', '');

  if (workbook.SheetNames.includes('Indicador_MUN')) {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets['Indicador_MUN'], { header: 1 });
    if (rows.length > 1) {
      // Fila 0: encabezados
      result.colLabels.v1 = String(rows[0][2] || '2012');
      result.colLabels.v2 = String(rows[0][3] || '2024');
      // Columnas 4 y 5: valor absoluto (si existen)
      if (rows[0][4] !== undefined && rows[0][4] !== null && rows[0][4] !== '') {
        result.hasAbsolute = true;
        result.absLabels.v1 = String(rows[0][4]);
        result.absLabels.v2 = String(rows[0][5] || '');
      }
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row[0]) continue;
        const id  = String(Math.round(Number(row[0])) || row[0]).trim();
        const v1  = parseFloat(row[2]);
        const v2  = parseFloat(row[3]);
        const a1  = parseFloat(row[4]);
        const a2  = parseFloat(row[5]);
        result.mun.set(id, {
          name: row[1] || id,
          v1: isNaN(v1) ? null : v1,
          v2: isNaN(v2) ? null : v2,
          a1: isNaN(a1) ? null : a1,   // valor absoluto período inicial
          a2: isNaN(a2) ? null : a2,   // valor absoluto período final
        });
      }
    }
  }

  if (workbook.SheetNames.includes('Indicador_DEP')) {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets['Indicador_DEP'], { header: 1 });
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row[0]) continue;
      result.dep.set(String(row[0]).trim(), {
        name: row[1] || String(row[0]),
        v1: parseFloat(row[2]) || null, v2: parseFloat(row[3]) || null,
        a1: parseFloat(row[4]) || null, a2: parseFloat(row[5]) || null,
      });
    }
  }

  const code = thresholdKey || result.indicatorCode;
  result.indicatorCode = code;
  if (ALL_THRESHOLDS[code]) {
    result.thresholds = ALL_THRESHOLDS[code];
  } else if (workbook.SheetNames.includes('Umbral')) {
    const urows = XLSX.utils.sheet_to_json(workbook.Sheets['Umbral'], { header: 1 });
    if (urows.length > 1) {
      const r = urows[1];
      result.thresholds = {
        meta:    { max: parseFloat(r[2]), min: parseFloat(r[3]) },
        proximo: { max: parseFloat(r[4]), min: parseFloat(r[5]) },
        retos:   { max: parseFloat(r[6]), min: parseFloat(r[7]) },
        grandes: { max: parseFloat(r[8]), min: parseFloat(r[9]) },
      };
    }
  }

  if (workbook.SheetNames.includes('Umbral')) {
    const urows = XLSX.utils.sheet_to_json(workbook.Sheets['Umbral'], { header: 1 });
    if (urows.length > 1) result.indicatorName = urows[1][1] || '';
  }

  // Siempre usar el label de INDICATOR_FILES como título — es la fuente de verdad
  // El nombre del Excel puede estar desactualizado o en otro idioma
  const foundInd = INDICATOR_FILES.find(i => i.file === filename);
  if (foundInd) result.indicatorName = foundInd.label;

  // Si no hay datos municipales, tratar como sin datos
  if (result.mun.size === 0) {
    console.warn(`[Atlas] ${filename} no tiene datos en Indicador_MUN`);
    setLoading(false);
    return null;
  }

  setLoading(false);
  return result;
}

function classify(value, thresholds, forceDir) {
  if (value === null || value === undefined || isNaN(value)) return 'sin';
  if (!thresholds) return 'sin';
  const ascending = forceDir !== undefined ? (forceDir === 'asc') : isAscending(thresholds);
  const t = thresholds;
  const eps = 1e-10;

  if (ascending) {
    // Si el valor supera el límite máximo definido en los umbrales → meta
    // (los umbrales pueden tener límites fijos que los datos reales superan)
    if (t.meta.max > t.meta.min && value >= t.meta.max - eps) return 'meta';
    if (value >= t.meta.min    - eps) return 'meta';
    if (value >= t.proximo.min - eps) return 'proximo';
    if (value >= t.retos.min   - eps) return 'retos';
    return 'grandes';
  } else {
    // Si el valor está por debajo del límite mínimo definido → meta
    if (t.meta.max < t.meta.min && value <= t.meta.max + eps) return 'meta';
    if (value <= t.meta.min    + eps) return 'meta';
    if (value <= t.proximo.min + eps) return 'proximo';
    if (value <= t.retos.min   + eps) return 'retos';
    return 'grandes';
  }
}

function classLabel(cat) {
  return { meta:'Meta alcanzada', proximo:'Próximo a alcanzarse', retos:'Quedan retos importantes', grandes:'Quedan retos grandes', sin:'Sin información' }[cat] || 'Sin información';
}
function classStatusCSS(cat) { return `status-${cat}`; }

function getFeatureId(feature) {
  const p   = feature.properties;
  const raw = p[GEO_FIELDS.idField] ?? p.Codigo_INE ?? p.COD_MUN ?? p.cod_mun ?? p.ID ?? p.id ?? p.OBJECTID ?? '';
  return String(Math.round(Number(raw)) || raw).trim();
}
function getFeatureName(feature) {
  const p = feature.properties;
  return String(p[GEO_FIELDS.nameField] ?? p.Municipio ?? p.MUNICIPIO ?? p.municipio ?? p.NAME ?? p.name ?? '').trim();
}

let _styleDebugCount = 0;
function featureStyle(feature, period, data, thresholds) {
  const id    = getFeatureId(feature);
  const entry = data.get(id);
  const val   = entry ? (period === 'left' ? entry.v1 : entry.v2) : null;
  const cat   = classify(val, thresholds, state.indicatorData ? getIndicatorDir(state.indicatorData) : undefined);
  if (_styleDebugCount < 3 && period === 'left') { console.log(`[Style] id="${id}" val=${val} cat=${cat}`); _styleDebugCount++; }
  return { fillColor: ODS_COLORS[cat], fillOpacity: 0.85, color: '#ffffff', weight: 0.5, opacity: 1 };
}

function renderMaps() {
  _styleDebugCount = 0;
  const data    = state.indicatorData;
  const mapData = state.level === 'municipal' ? data.mun : data.dep;
  const geo     = state.level === 'municipal' ? state.geoMun : state.geoDep;
  if (!geo) { renderDemoPlaceholder(); return; }
  if (state.layerLeft)  mapLeft.removeLayer(state.layerLeft);
  if (state.layerRight) mapRight.removeLayer(state.layerRight);
  function makeLayer(map, period) {
    return L.geoJSON(geo, {
      style: f => featureStyle(f, period, mapData, data.thresholds),
      onEachFeature: (feature, layer) => {
        layer.on({ mouseover: e => onFeatureHover(e, feature, period), mouseout: () => hideTooltip(), click: e => onFeatureClick(e, feature) });
      },
    }).addTo(map);
  }
  state.layerLeft  = makeLayer(mapLeft,  'left');
  state.layerRight = makeLayer(mapRight, 'right');
  try {
    const bounds = state.layerLeft.getBounds();
    if (bounds.isValid()) {
      mapLeft.fitBounds(bounds,  { padding: [20, 20], animate: false });
      mapRight.fitBounds(bounds, { padding: [20, 20], animate: false });
    }
  } catch (e) {
    const b = L.latLngBounds(BOLIVIA_BOUNDS[0], BOLIVIA_BOUNDS[1]);
    mapLeft.fitBounds(b,  { padding: [20, 20], animate: false });
    mapRight.fitBounds(b, { padding: [20, 20], animate: false });
  }
}

function onFeatureHover(e, feature) {
  e.target.setStyle({ weight: 2, color: '#1d4ed8', fillOpacity: 0.95 });
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) e.target.bringToFront();
  showTooltip(e.originalEvent, feature);
}

function showTooltip(mouseEvent, feature) {
  const data  = state.indicatorData;
  const id    = getFeatureId(feature);
  const name  = getFeatureName(feature) || id;
  const props = feature.properties;
  const entry = (state.level === 'municipal' ? data.mun : data.dep).get(id);
  const v1 = entry?.v1, v2 = entry?.v2;
  const a1 = entry?.a1, a2 = entry?.a2;
  const cat   = classify(v2 ?? v1, data.thresholds, getIndicatorDir(data));
  const diff  = (v1 !== null && v2 !== null) ? (v2 - v1) : null;
  const dir   = getIndicatorDir(data);
  const favorable = diff === null ? null : (dir === 'asc' ? diff > 0 : diff < 0);
  const sign  = diff !== null ? (diff > 0 ? '+' : '') : '';
  const dClass = diff === null ? 'neutral' : favorable ? 'positive' : 'negative';
  const dpto  = getDepartamento(id);
  const prov  = props.Provincia || props.PROVINCIA || '';
  const loc   = [dpto, prov].filter(s => s && s !== '—').join(' · ');

  const absHTML = data.hasAbsolute && (a1 !== null || a2 !== null) ? `
    <div style="margin-top:7px;padding-top:7px;border-top:1px solid var(--border)">
      <div style="font-size:10px;color:var(--text-light);margin-bottom:3px;text-transform:uppercase;letter-spacing:.5px">Valor absoluto</div>
      ${a1 !== null ? `<div class="tooltip-row"><span class="tooltip-key">${data.colLabels.v1}</span><span class="tooltip-val">${fmtNum(a1)}</span></div>` : ''}
      ${a2 !== null ? `<div class="tooltip-row"><span class="tooltip-key">${data.colLabels.v2}</span><span class="tooltip-val">${fmtNum(a2)}</span></div>` : ''}
    </div>` : '';

  dom.tooltip.innerHTML = `
    <div class="tooltip-name">${name}</div>
    ${loc ? `<div style="font-size:11px;color:var(--text-light);margin-bottom:6px;padding-bottom:6px;border-bottom:1px solid var(--border)">${loc}</div>` : ''}
    <div style="font-size:10px;color:var(--text-light);margin-bottom:3px;text-transform:uppercase;letter-spacing:.5px">Indicador</div>
    <div class="tooltip-row"><span class="tooltip-key">${data.colLabels.v1display||data.colLabels.v1}</span><span class="tooltip-val">${fmtNum(v1)}</span></div>
    <div class="tooltip-row"><span class="tooltip-key">${data.colLabels.v2display||data.colLabels.v2}</span><span class="tooltip-val">${fmtNum(v2)}</span></div>
    ${diff !== null ? `<div class="tooltip-change ${dClass}">${favorable ? '▲' : '▼'} ${sign}${fmtNum(Math.abs(diff))}</div>` : ''}
    ${absHTML}
    <div style="font-size:10px;color:var(--text-light);margin-top:5px">Clasificación (${data.colLabels.v2display||data.colLabels.v2})</div>
    <span class="tooltip-status ${classStatusCSS(cat)}">${classLabel(cat)}</span>
  `;
  positionTooltip(mouseEvent);
  dom.tooltip.classList.remove('hidden');
}

function positionTooltip(e) {
  let x = e.clientX + 16, y = e.clientY + 16;
  if (x + 260 > window.innerWidth)  x = e.clientX - 260 - 8;
  if (y + 240 > window.innerHeight) y = e.clientY - 240 - 8;
  dom.tooltip.style.left = x + 'px';
  dom.tooltip.style.top  = y + 'px';
}

function hideTooltip() {
  dom.tooltip.classList.add('hidden');
  if (state.layerLeft)  state.layerLeft.resetStyle();
  if (state.layerRight) state.layerRight.resetStyle();
}

function onFeatureClick(e, feature) {
  const data  = state.indicatorData;
  const id    = getFeatureId(feature);
  const name  = getFeatureName(feature) || id;
  const props = feature.properties;
  const entry = (state.level === 'municipal' ? data.mun : data.dep).get(id);
  state.selectedId = id;
  const v1 = entry?.v1, v2 = entry?.v2, a1 = entry?.a1, a2 = entry?.a2;
  const cat = classify(v2 ?? v1, data.thresholds, getIndicatorDir(data));
  const diff = (v1 !== null && v2 !== null) ? (v2 - v1) : null;
  const dir  = getIndicatorDir(data);
  const favorable = diff !== null ? (dir === 'asc' ? diff > 0 : diff < 0) : null;
  const dpto = getDepartamento(id);
  const prov = props.Provincia || props.PROVINCIA || '';

  const absRows = data.hasAbsolute ? `
    <div style="font-size:10px;color:var(--text-muted);margin-top:8px;margin-bottom:3px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Valor absoluto</div>
    ${a1 !== null ? `<div class="mun-card-row"><span class="mun-card-key">${data.absLabels.v1 || data.colLabels.v1}</span><span class="mun-card-val">${fmtNum(a1)}</span></div>` : ''}
    ${a2 !== null ? `<div class="mun-card-row"><span class="mun-card-key">${data.absLabels.v2 || data.colLabels.v2}</span><span class="mun-card-val">${fmtNum(a2)}</span></div>` : ''}
  ` : '';

  dom.munInfoCard.innerHTML = `
    <div class="mun-card-name">${name}</div>
    <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${dpto}${prov ? ' · ' + prov : ''}</div>
    <div class="mun-card-row"><span class="mun-card-key">Código INE</span><span class="mun-card-val">${id}</span></div>
    <div style="font-size:10px;color:var(--text-muted);margin-top:6px;margin-bottom:3px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Indicador</div>
    <div class="mun-card-row"><span class="mun-card-key">${data.colLabels.v1display||data.colLabels.v1}</span><span class="mun-card-val">${fmtNum(v1)}</span></div>
    <div class="mun-card-row"><span class="mun-card-key">${data.colLabels.v2display||data.colLabels.v2}</span><span class="mun-card-val">${fmtNum(v2)}</span></div>
    ${diff !== null ? `<div class="mun-card-row"><span class="mun-card-key">Cambio</span><span class="mun-card-val" style="color:${favorable ? 'var(--c-meta)' : 'var(--c-grandes)'}">${diff > 0 ? '+' : ''}${fmtNum(diff)}</span></div>` : ''}
    ${absRows}
    <div style="font-size:10px;color:var(--text-muted);margin-top:6px;margin-bottom:2px">Clasificación (${data.colLabels.v2display||data.colLabels.v2})</div>
    <span class="mun-card-status ${classStatusCSS(cat)}">${classLabel(cat)}</span>
  `;
  dom.munInfoSection.style.display = 'block';
}

function renderLegend(data) {
  const mun    = state.level === 'municipal' ? data.mun : data.dep;
  const counts = { meta: 0, proximo: 0, retos: 0, grandes: 0, sin: 0 };
  for (const [, entry] of mun) {
    const val = legendPeriod === 'v1' ? (entry.v1 ?? entry.v2) : (entry.v2 ?? entry.v1);
    counts[classify(val, data.thresholds, getIndicatorDir(data))]++;
  }
  dom.legendContainer.innerHTML = '';
  [
    { cat:'meta',    label:'Meta alcanzada',          color:ODS_COLORS.meta },
    { cat:'proximo', label:'Próximo a alcanzarse',     color:ODS_COLORS.proximo },
    { cat:'retos',   label:'Quedan retos importantes', color:ODS_COLORS.retos },
    { cat:'grandes', label:'Quedan retos grandes',     color:ODS_COLORS.grandes },
    { cat:'sin',     label:'Sin información',          color:ODS_COLORS.sin },
  ].forEach(item => {
    const div = document.createElement('div');
    div.className = 'legend-item';
    div.innerHTML = `<div class="legend-dot" style="background:${item.color}"></div><span class="legend-text">${item.label}</span><span class="legend-count">${counts[item.cat]}</span>`;
    dom.legendContainer.appendChild(div);
  });
}

/* ══════ RESUMEN NACIONAL ══════ */
function renderStats(data) {
  const mun   = state.level === 'municipal' ? data.mun : data.dep;
  const vals1 = [], vals2 = [];
  // SOLO usar valores del INDICADOR (v1, v2) — no los absolutos
  for (const [, entry] of mun) {
    if (entry.v1 !== null) vals1.push(entry.v1);
    if (entry.v2 !== null) vals2.push(entry.v2);
  }
  if (!vals1.length && !vals2.length) { dom.statsSection.style.display = 'none'; return; }

  const avg  = arr => arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : null;
  const dir  = getIndicatorDir(data);
  const avg1 = avg(vals1), avg2 = avg(vals2);
  const avgDiff = (avg1 !== null && avg2 !== null) ? (avg2 - avg1) : null;
  const favorable = avgDiff === null ? null : (dir === 'asc' ? avgDiff > 0 : avgDiff < 0);
  const trendClass = favorable === null ? '' : favorable ? 'trend-up' : 'trend-down';
  const trendLabel = favorable === null ? '' : favorable ? 'Tendencia favorable' : 'Tendencia desfavorable';


  dom.statsContainer.innerHTML = `
    ${avgDiff !== null ? `
    <div class="stats-trend ${trendClass}">
      <span class="stats-trend-icon">${favorable ? '▲' : '▼'}</span>
      <span class="stats-trend-label">${trendLabel}</span>
      <span class="stats-trend-val">${avgDiff > 0 ? '+' : ''}${fmtNum(avgDiff)}</span>
    </div>` : ''}
    <div class="stats-period-row">
      <div class="stats-period-col stats-period-initial">
        <div class="stats-period-label">Período inicial</div>
        <div class="stat-card"><div class="stat-value">${fmtNum(avg1)}</div><div class="stat-label">Promedio</div></div>
        <div class="stat-card"><div class="stat-value">${fmtNum(vals1.length ? Math.max(...vals1) : null)}</div><div class="stat-label">Máximo</div></div>
        <div class="stat-card"><div class="stat-value">${fmtNum(vals1.length ? Math.min(...vals1) : null)}</div><div class="stat-label">Mínimo</div></div>
      </div>
      <div class="stats-divider"></div>
      <div class="stats-period-col stats-period-final">
        <div class="stats-period-label">Período final</div>
        <div class="stat-card"><div class="stat-value">${fmtNum(avg2)}</div><div class="stat-label">Promedio</div></div>
        <div class="stat-card"><div class="stat-value">${fmtNum(vals2.length ? Math.max(...vals2) : null)}</div><div class="stat-label">Máximo</div></div>
        <div class="stat-card"><div class="stat-value">${fmtNum(vals2.length ? Math.min(...vals2) : null)}</div><div class="stat-label">Mínimo</div></div>
      </div>
    </div>
  `;
  dom.statsSection.style.display = 'block';
  renderConvergence(data);
}

/* ══════ β-CONVERGENCIA — cálculo compartido ══════ */
/* convYMode: 'relative' = cambio/valor_inicial (β-conv) | 'absolute' = cambio directo */
let convYMode = 'relative';

function calcConvergence(data, yMode) {
  yMode = yMode || convYMode;
  const mun = state.level === 'municipal' ? data.mun : data.dep;
  const dir = getIndicatorDir(data);
  const pairs = [];
  for (const [id, entry] of mun) {
    if (entry.v1 !== null && entry.v2 !== null) {
      const rawChange = dir === 'asc' ? (entry.v2 - entry.v1) : -(entry.v2 - entry.v1);
      // Modo relativo: normaliza por valor inicial (β-convergencia de Barro)
      // Modo absoluto: cambio directo en unidades del indicador
      if (yMode === 'relative' && Math.abs(entry.v1) <= 1e-10) continue;
      const yVal = yMode === 'relative' ? rawChange / Math.abs(entry.v1) : rawChange;
      pairs.push({
        id,
        v1: entry.v1,
        favorable: yVal,
        name: entry.name || '',
        cat: classify(entry.v2, data.thresholds, dir)
      });
    }
  }
  if (pairs.length < 10) return null;
  const n  = pairs.length;
  const mx = pairs.reduce((s,p)=>s+p.v1,0)/n;
  const my = pairs.reduce((s,p)=>s+p.favorable,0)/n;
  let num=0, dx2=0, dy2=0;
  for (const p of pairs) { const dx=p.v1-mx, dy=p.favorable-my; num+=dx*dy; dx2+=dx*dx; dy2+=dy*dy; }
  const r    = (dx2&&dy2) ? num/Math.sqrt(dx2*dy2) : 0;
  const rAbs = Math.abs(r);
  const r2   = r*r;
  const tStat= (n>2&&rAbs<1) ? r*Math.sqrt(n-2)/Math.sqrt(1-r2) : 0;
  const tAbs = Math.abs(tStat);
  const tCrit= n>300?1.968:n>200?1.972:n>100?1.984:n>50?2.009:2.306;
  const pSig = tAbs>tCrit;
  const slope= dx2>0 ? num/dx2 : 0;
  const intercept = my - slope*mx;
  let colorClass, lineColor, label, icon;
  if (r < -0.3)      { colorClass='conv-converge'; lineColor='#16a34a'; label='β-Convergencia'; icon='↘↗'; }
  else if (r > 0.3)  { colorClass='conv-diverge';  lineColor='#2563eb'; label='β-Divergencia';  icon='↗↘'; }
  else               { colorClass='conv-neutral';   lineColor='#9ca3af'; label='Sin tendencia clara'; icon='→';  }
  return { pairs, n, r, rAbs, r2, pSig, slope, intercept, mx, my, colorClass, lineColor, label, icon };
}

/* ══════ CONVERGENCIA TERRITORIAL — sidebar mínimo ══════ */
function renderConvergence(data) {
  const old = $('convergence-section');
  if (old) old.remove();
}

/* ══════ β-CONVERGENCIA — vista completa ══════ */
function renderConvergenciaView(data) {
  const indName   = $('conv-indicator-name');
  const badge     = $('conv-result-badge');
  const stats     = $('conv-view-stats');
  const container = $('conv-scatter-container');

  /* Sincronizar selector de la pestaña */
  const convSel = $('conv-indicator-select');
  if (convSel && state.currentFile) {
    convSel.value = state.currentFile;
  }

  /* Nombre del indicador */
  const ind = INDICATOR_FILES.find(i => i.file === state.currentFile);
  const indLabel = ind ? ind.label : '—';
  if (indName) indName.textContent = indLabel;

  /* Toggle Relativo / Absoluto */
  let toggleWrap = $('conv-y-toggle');
  if (!toggleWrap) {
    toggleWrap = document.createElement('div');
    toggleWrap.id = 'conv-y-toggle';
    toggleWrap.className = 'conv-y-toggle';
    toggleWrap.innerHTML = `
      <span class="conv-y-toggle-label">Eje Y:</span>
      <button class="conv-y-btn ${convYMode==='relative'?'active':''}" data-mode="relative">Relativo</button>
      <button class="conv-y-btn ${convYMode==='absolute'?'active':''}" data-mode="absolute">Absoluto</button>`;
    const mainEl = document.querySelector('.conv-view-main');
    if (mainEl) mainEl.insertBefore(toggleWrap, mainEl.firstChild);
    toggleWrap.querySelectorAll('.conv-y-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        convYMode = btn.dataset.mode;
        toggleWrap.querySelectorAll('.conv-y-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === convYMode));
        if (state.indicatorData) renderConvergenciaView(state.indicatorData);
      });
    });
  } else {
    toggleWrap.querySelectorAll('.conv-y-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === convYMode));
  }

  const cv = calcConvergence(data, convYMode);
  if (!cv) {
    if (badge)     badge.innerHTML = '';
    if (stats)     stats.innerHTML = '';
    if (container) container.innerHTML = '<div class="conv-scatter-placeholder"><p>Datos insuficientes para calcular β-convergencia</p></div>';
    return;
  }

  const { pairs, n, r, r2, pSig, slope, intercept, colorClass, lineColor, label, icon } = cv;

  /* Badge: solo β, sin flecha ni etiqueta de texto */
  if (badge) badge.innerHTML = `
    <div class="conv-badge-big ${colorClass}">
      <span class="conv-badge-r">β = ${slope>=0?'+':''}${slope.toFixed(4)}</span>
    </div>`;

  /* Stats — sin t-stat */
  const sigHTML = pSig
    ? '<span class="conv-sig conv-sig-yes">p &lt; 0.05</span>'
    : '<span class="conv-sig conv-sig-no">p ≥ 0.05</span>';
  if (stats) stats.innerHTML = `
    <div class="conv-stat-row"><span class="conv-stat-k">R²</span><span class="conv-stat-v">${r2.toFixed(3)}</span></div>
    <div class="conv-stat-row"><span class="conv-stat-k">Significancia</span><span class="conv-stat-v">${sigHTML}</span></div>
    <div class="conv-stat-row"><span class="conv-stat-k">n municipios</span><span class="conv-stat-v">${n}</span></div>`;

  /* ── Scatter grande ── */
  if (!container) return;
  const clipId = 'cv-clip-' + Date.now();
  // Usar el tamaño real del contenedor para escalar el gráfico
  const cRect = container.getBoundingClientRect();
  const W = Math.max(700, cRect.width  > 0 ? Math.floor(cRect.width  - 32) : 1100);
  const H = Math.max(500, cRect.height > 0 ? Math.floor(cRect.height - 60) : 680);
  const ML = 76, MR = 28, MT = 28, MB = 68;
  const PW = W-ML-MR, PH = H-MT-MB;

  const colLabels = data.colLabels || {};
  const xPeriodLabel = (data.colLabels && data.colLabels.v1display) ? data.colLabels.v1display : (colLabels.v1 || 'Período inicial');
  const xAxisLabel = `${indLabel} (${xPeriodLabel})`;
  const yAxisLabel = convYMode === 'relative'
    ? 'Variación del indicador  [ (valor final − valor inicial) / valor inicial ]'
    : 'Variación del indicador  (valor final − valor inicial)';

  const xs = pairs.map(p=>p.v1);
  const ys = pairs.map(p=>p.favorable);
  let xMin=Math.min(...xs), xMax=Math.max(...xs);
  let yMin=Math.min(...ys), yMax=Math.max(...ys);
  const xPad=(xMax-xMin)*0.06||0.5;
  const yPad=(yMax-yMin)*0.06||0.5;
  xMin-=xPad; xMax+=xPad; yMin-=yPad; yMax+=yPad;

  const scX = v => ML + ((v-xMin)/(xMax-xMin))*PW;
  const scY = v => MT + PH - ((v-yMin)/(yMax-yMin))*PH;

  function linePt(xVal) {
    const yVal = intercept + slope*xVal;
    return { x: scX(xVal), y: scY(Math.max(yMin,Math.min(yMax,yVal))) };
  }
  const lp1 = linePt(xMin+xPad*0.1);
  const lp2 = linePt(xMax-xPad*0.1);

  const dotColors = { meta:'#29b158', proximo:'#d4a017', retos:'#ec8444', grandes:'#e04350', sin:'#9ca3af' };

  const fmt = v => {
    const a=Math.abs(v);
    if(a===0) return '0';
    if(a>=10000) return (v/1000).toFixed(0)+'k';
    if(a>=1000)  return (v/1000).toFixed(1)+'k';
    if(a>=100)   return v.toFixed(0);
    if(a>=10)    return v.toFixed(1);
    if(a>=1)     return v.toFixed(2);
    if(a>=0.1)   return v.toFixed(3);
    return v.toFixed(4);
  };

  /* Ticks Y */
  const yRange = Math.max(...ys)-Math.min(...ys);
  const yStep  = yRange>200?50:yRange>50?10:yRange>10?5:yRange>2?1:yRange>0.5?0.2:yRange>0.1?0.05:0.01;
  const yTickStart = Math.ceil((yMin+yPad*0.5)/yStep)*yStep;
  const yTicks = [];
  for (let v=yTickStart; v<=yMax-yPad*0.5; v+=yStep) yTicks.push(Math.round(v*1e6)/1e6);

  const yGridSVG = yTicks.map(v => {
    const y = scY(v).toFixed(1);
    return `<line x1="${ML}" y1="${y}" x2="${ML+PW}" y2="${y}" stroke="#e5e7eb" stroke-width="${v===0?1.2:0.6}" stroke-dasharray="${v===0?'none':'3,3'}"/>
            <text x="${(ML-8).toFixed(1)}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="11" fill="#9ca3af">${fmt(v)}</text>`;
  }).join('');

  /* Ticks X */
  const xRange = Math.max(...xs)-Math.min(...xs);
  const xStep  = xRange>200?50:xRange>50?10:xRange>10?5:xRange>2?1:xRange>0.5?0.2:0.05;
  const xTickStart = Math.ceil((xMin+xPad*0.5)/xStep)*xStep;
  const xTicks = [];
  for (let v=xTickStart; v<=xMax-xPad*0.5; v+=xStep) xTicks.push(Math.round(v*1e6)/1e6);

  const xGridSVG = xTicks.map(v => {
    const x = scX(v).toFixed(1);
    return `<line x1="${x}" y1="${MT}" x2="${x}" y2="${MT+PH}" stroke="#e5e7eb" stroke-width="0.6" stroke-dasharray="3,3"/>
            <text x="${x}" y="${(MT+PH+18).toFixed(1)}" text-anchor="middle" font-size="11" fill="#9ca3af">${fmt(v)}</text>`;
  }).join('');

  const zeroY = (yMin<0&&yMax>0) ? `<line x1="${ML}" y1="${scY(0).toFixed(1)}" x2="${ML+PW}" y2="${scY(0).toFixed(1)}" stroke="#9ca3af" stroke-width="1"/>` : '';

  /* Puntos con data-attributes para tooltip JS */
  const dotsSVG = pairs.map((p,i) => {
    const cx=scX(p.v1).toFixed(1), cy=scY(p.favorable).toFixed(1);
    const fill=dotColors[p.cat]||'#9ca3af';
    return `<circle class="cv-dot" cx="${cx}" cy="${cy}" r="5" fill="${fill}" fill-opacity="0.75" stroke="white" stroke-width="1" data-name="${p.name.replace(/"/g,'&quot;')}" data-x="${fmt(p.v1)}" data-y="${fmt(p.favorable)}" data-id="${p.id||''}" style="cursor:pointer"/>`;
  }).join('');

  const yCtr = (MT+PH/2).toFixed(1);

  const svg = `<svg id="cv-svg" width="100%" height="100%" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">
    <defs><clipPath id="${clipId}"><rect x="${ML}" y="${MT}" width="${PW}" height="${PH}"/></clipPath></defs>
    <rect x="${ML}" y="${MT}" width="${PW}" height="${PH}" fill="#fafafa" rx="4" stroke="#e5e7eb" stroke-width="1"/>
    ${yGridSVG}
    ${xGridSVG}
    ${zeroY}
    <g clip-path="url(#${clipId})">${dotsSVG}
      <line x1="${lp1.x.toFixed(1)}" y1="${lp1.y.toFixed(1)}" x2="${lp2.x.toFixed(1)}" y2="${lp2.y.toFixed(1)}" stroke="${lineColor}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
    </g>
    <text x="${(ML+PW/2).toFixed(1)}" y="${(H-4).toFixed(1)}" text-anchor="middle" font-size="12" fill="#374151" font-weight="600">${xAxisLabel}</text>
    <text x="13" y="${yCtr}" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#374151" font-weight="600" transform="rotate(-90 13 ${yCtr})">${yAxisLabel}</text>
  </svg>`;

  container.innerHTML = svg;

  // Redibujar si el contenedor cambia de tamaño
  if (!container._resizeObserver) {
    container._resizeObserver = new ResizeObserver(() => {
      // Solo redibujar si el contenedor es visible y tiene dimensiones
      const r = container.getBoundingClientRect();
      if (r.width > 50 && r.height > 50 && state.indicatorData) {
        renderConvergenciaView(state.indicatorData);
      }
    });
    container._resizeObserver.observe(container);
  }

  container.addEventListener('click', e => {
    if (!e.target.classList.contains('cv-dot')) {
      container.querySelectorAll('.cv-dot[data-pinned="true"]').forEach(d => { d.dataset.pinned='false'; d.setAttribute('stroke','white'); d.setAttribute('stroke-width','1'); });
      if (tooltip) tooltip.style.display = 'none';
    }
  });

  /* Tooltip hover JS */
  const tooltip = container.querySelector('#conv-dot-tooltip') || $('conv-dot-tooltip');
  if (!tooltip) return; // guard: no proceder si el tooltip no existe
  container.querySelectorAll('.cv-dot').forEach(dot => {
    dot.addEventListener('mouseenter', e => {
      if (dot.dataset.pinned === 'true') return;
      if (!tooltip) return;
      const xLabel = indLabel;
      const yLabel = convYMode === 'relative' ? 'Variación relativa' : 'Variación absoluta';
      tooltip.innerHTML = `
        <div style="font-weight:800;font-size:13px;margin-bottom:5px;border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:4px">${dot.dataset.name}</div>
        <div style="font-size:11px;display:flex;justify-content:space-between;gap:12px"><span style="color:#6b7280">${xLabel}</span><span style="font-family:'DM Mono',monospace;font-weight:600">${dot.dataset.x}</span></div>
        <div style="font-size:11px;display:flex;justify-content:space-between;gap:12px"><span style="color:#6b7280">${yLabel}</span><span style="font-family:'DM Mono',monospace;font-weight:600">${dot.dataset.y}</span></div>
        `;
      tooltip.style.display = 'block';
    });
    dot.addEventListener('mousemove', e => {
      if (dot.dataset.pinned === 'true') return;
      if (!tooltip) return;
      const rect = container.getBoundingClientRect();
      let tx = e.clientX - rect.left + 14;
      let ty = e.clientY - rect.top  - 14;
      if (tx + 220 > container.offsetWidth) tx = e.clientX - rect.left - 230;
      if (ty + 100 > container.offsetHeight) ty = e.clientY - rect.top - 110;
      tooltip.style.left = tx + 'px';
      tooltip.style.top  = ty + 'px';
    });
    dot.addEventListener('mouseleave', e => {
      if (dot.dataset.pinned === 'true') return;
      if (tooltip) tooltip.style.display = 'none';
    });
    dot.addEventListener('click', e => {
      e.stopPropagation();
      const munId  = dot.dataset.id;
      const xLabel = indLabel;
      const yLabel = convYMode === 'relative' ? 'Variación relativa' : 'Variación absoluta';
      // Fijar tooltip al hacer clic
      container.querySelectorAll('.cv-dot[data-pinned="true"]').forEach(d => {
        d.dataset.pinned = 'false';
        d.setAttribute('stroke', 'white');
        d.setAttribute('stroke-width', '1');
      });
      dot.dataset.pinned = 'true';
      dot.setAttribute('stroke', '#1a4fa0');
      dot.setAttribute('stroke-width', '2.5');
      tooltip.innerHTML = `
        <div style="font-weight:800;font-size:13px;margin-bottom:5px;border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:4px">${dot.dataset.name}</div>
        <div style="font-size:11px;display:flex;justify-content:space-between;gap:12px"><span style="color:#6b7280">${xLabel}</span><span style="font-family:'DM Mono',monospace;font-weight:600">${dot.dataset.x}</span></div>
        <div style="font-size:11px;display:flex;justify-content:space-between;gap:12px"><span style="color:#6b7280">${yLabel}</span><span style="font-family:'DM Mono',monospace;font-weight:600">${dot.dataset.y}</span></div>
        `;
      tooltip.style.display = 'block';
      const rect = container.getBoundingClientRect();
      let tx = e.clientX - rect.left + 14;
      let ty = e.clientY - rect.top  - 14;
      if (tx + 220 > container.offsetWidth) tx = e.clientX - rect.left - 230;
      if (ty + 100 > container.offsetHeight) ty = e.clientY - rect.top - 110;
      tooltip.style.left = tx + 'px';
      tooltip.style.top  = ty + 'px';
      // Solo mostrar info, sin navegar al mapa
    });
  });
}

function rankBadgeText(cat) {
  return { meta:'#0d3d1e', proximo:'#3d2e00', retos:'#3d1800', grandes:'#3d0007', sin:'#374151' }[cat] || '#374151';
}

/* ══════ PANEL DE ANÁLISIS ══════ */
function renderAnalysisPanel(data) {
  const panel = dom.analysisPanel;
  if (!panel) return;
  const mun = data.mun, t = data.thresholds, label2 = data.colLabels.v2;
  const dir = getIndicatorDir(data), ascending = dir === 'asc';
  const entries = [];
  for (const [id, entry] of mun) { if (entry.v2 !== null) entries.push({ id, ...entry }); }
  if (!entries.length) { panel.style.display = 'none'; return; }
  const sorted = [...entries].sort((a, b) => ascending ? b.v2 - a.v2 : a.v2 - b.v2);
  const best5 = sorted.slice(0, 5), worst5 = sorted.slice(-5).reverse();
  let thresholdHTML = '';
  if (t) {
    const rows = ascending ? [
      { label:'Meta alcanzada',          color:ODS_COLORS.meta,    range:`≥ ${t.meta.min}` },
      { label:'Próximo a alcanzarse',     color:ODS_COLORS.proximo, range:`${t.proximo.min} – ${t.meta.min}` },
      { label:'Quedan retos importantes', color:ODS_COLORS.retos,   range:`${t.retos.min} – ${t.proximo.min}` },
      { label:'Quedan retos grandes',     color:ODS_COLORS.grandes, range:`< ${t.retos.min}` },
    ] : [
      { label:'Meta alcanzada',          color:ODS_COLORS.meta,    range:`≤ ${t.meta.min}` },
      { label:'Próximo a alcanzarse',     color:ODS_COLORS.proximo, range:`${t.meta.min} – ${t.proximo.min}` },
      { label:'Quedan retos importantes', color:ODS_COLORS.retos,   range:`${t.proximo.min} – ${t.retos.min}` },
      { label:'Quedan retos grandes',     color:ODS_COLORS.grandes, range:`> ${t.retos.min}` },
    ];
    thresholdHTML = rows.map(r => `<div class="threshold-row"><div class="threshold-dot" style="background:${r.color}"></div><span class="threshold-label">${r.label}</span><span class="threshold-range">${r.range}</span></div>`).join('');
  }
  function munRows(list, isBest) {
    return list.map((m, i) => {
      const cat = classify(m.v2, t, dir), diff = m.v1 !== null ? (m.v2 - m.v1) : null;
      const favorable = diff === null ? null : (ascending ? diff > 0 : diff < 0);
      const sign = diff !== null ? (diff > 0 ? '+' : '') : '';
      const diffColor = favorable === null ? 'var(--text-muted)' : favorable ? 'var(--c-meta)' : 'var(--c-grandes)';
      return `<div class="rank-row">
        <div class="rank-num" style="color:${isBest ? ODS_COLORS.meta : ODS_COLORS.grandes}">${i+1}</div>
        <div class="rank-info">
          <div class="rank-name">${m.name}</div>
          <div class="rank-sub" style="color:${diffColor}">${diff !== null ? `${favorable ? '▲' : '▼'} ${sign}${fmtNum(diff)}` : ''}</div>
        </div>
        <div class="rank-value">
          <div style="font-family:'DM Mono',monospace;font-size:14px;font-weight:600">${fmtNum(m.v2)}</div>
          <div class="rank-badge" style="background:${ODS_COLORS[cat]};color:${rankBadgeText(cat)}">${classLabel(cat)}</div>
        </div>
      </div>`;
    }).join('');
  }
  panel.style.display = 'block';
  panel.innerHTML = `
    <div class="analysis-grid">
      <div class="analysis-card">
        <div class="analysis-card-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          Umbrales ODS
        </div>
        <div class="threshold-list">${thresholdHTML}</div>
      </div>
      <div class="analysis-card">
        <div class="analysis-card-title" style="color:${ODS_COLORS.meta}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          5 Mejores municipios · ${label2}
        </div>
        <div class="rank-list">${munRows(best5, true)}</div>
      </div>
      <div class="analysis-card">
        <div class="analysis-card-title" style="color:${ODS_COLORS.grandes}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
          5 Municipios con más retos · ${label2}
        </div>
        <div class="rank-list">${munRows(worst5, false)}</div>
      </div>
    </div>`;
}

/* ══════ BÚSQUEDA ══════ */
function initSearch() {
  if (!dom.munSearch) return;
  dom.munSearch.addEventListener('input', () => {
    const q = dom.munSearch.value.trim().toLowerCase();
    if (!q || !state.indicatorData) { dom.searchResults.classList.add('hidden'); return; }
    const results = [];
    for (const [id, entry] of state.indicatorData.mun) {
      if (entry.name.toLowerCase().includes(q)) { results.push({ id, ...entry }); if (results.length >= 8) break; }
    }
    if (!results.length) { dom.searchResults.classList.add('hidden'); return; }
    dom.searchResults.innerHTML = '';
    for (const r of results) {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      const cat = classify(r.v2, state.indicatorData.thresholds);
      item.innerHTML = `<strong>${r.name}</strong><br><span>${r.v2 !== null ? fmtNum(r.v2) : '—'} · ${classLabel(cat)}</span>`;
      item.addEventListener('click', () => { zoomToMunicipality(r.id); dom.munSearch.value = r.name; dom.searchResults.classList.add('hidden'); });
      dom.searchResults.appendChild(item);
    }
    dom.searchResults.classList.remove('hidden');
  });
  document.addEventListener('click', e => { if (!dom.munSearch.contains(e.target)) dom.searchResults.classList.add('hidden'); });
}

function zoomToMunicipality(id) {
  const geo = state.geoMun;
  if (!geo) return;
  for (const feature of geo.features) {
    if (getFeatureId(feature) === String(id)) { mapLeft.fitBounds(L.geoJSON(feature).getBounds(), { padding: [40, 40] }); break; }
  }
}

function updateColumnLabels(data) {
  if (!data) return;
  // Usar etiquetas de período del Excel de lista si están disponibles
  const pLabels = PERIOD_LABELS[data.indicatorCode] || {};
  const labelV1 = pLabels.v1 || data.colLabels.v1;
  const labelV2 = pLabels.v2 || data.colLabels.v2;

  dom.colLabelLeft.textContent  = labelV1;
  dom.colLabelRight.textContent = labelV2;
  const titleEl = $('indicator-full-name');
  const codeEl  = $('indicator-code');
  if (titleEl) titleEl.textContent = data.indicatorName || '';
  if (codeEl)  codeEl.textContent  = data.indicatorCode || '';
  const th1 = $('th-v1'), th2 = $('th-v2');
  if (th1) th1.textContent = labelV1;
  if (th2) th2.textContent = labelV2;
  const tn = $('table-indicator-name');
  if (tn) tn.textContent = data.indicatorName || '—';

  // Guardar en data para uso en tooltip y card
  data.colLabels.v1display = labelV1;
  data.colLabels.v2display = labelV2;
}

function renderDemoPlaceholder() {
  const msg = `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:24px;text-align:center;background:#f4f5f7"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg><p style="color:#6b7280;font-size:13px;line-height:1.6;max-width:260px">Agrega <strong>municipios.geojson</strong> en <code style="background:#e5e7eb;padding:1px 4px;border-radius:3px">data/geojson/</code></p></div>`;
  document.getElementById('map-left').innerHTML  = msg;
  document.getElementById('map-right').innerHTML = msg;
}

function exportPNG() { alert('Para exportar: usa Ctrl+P → Guardar como PDF.'); }
function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(()=>{});
  else document.exitFullscreen();
}
function setLoading(visible, text='') {
  dom.loadingText.textContent = text;
  dom.loadingOverlay.classList.toggle('hidden', !visible);
}

async function onIndicatorChange(file, thresholdKey) {
  if (!file) return;
  state.currentFile = file;
  dom.munInfoSection.style.display = 'none';
  tableMode = 'indicator';
  const data = await readExcel(file, thresholdKey);
  if (!data) {
    // Archivo existe pero sin datos — ocultar mapas y mostrar aviso
    if (state.layerLeft)  { mapLeft.removeLayer(state.layerLeft);  state.layerLeft  = null; }
    if (state.layerRight) { mapRight.removeLayer(state.layerRight); state.layerRight = null; }
    const msg = `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#f4f5f7;text-align:center;padding:24px"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><p style="color:#6b7280;font-size:13px;font-weight:600">Este indicador aún no tiene datos disponibles</p></div>`;
    document.getElementById('map-left').innerHTML  = msg;
    document.getElementById('map-right').innerHTML = msg;
    dom.legendContainer.innerHTML = '<div class="legend-placeholder">Sin datos disponibles</div>';
    dom.statsSection.style.display = 'none';
    const convEl = document.getElementById('convergence-section');
    if (convEl) convEl.style.display = 'none';
    const panelEl = dom.analysisPanel;
    if (panelEl) panelEl.style.display = 'none';
    setLoading(false);
    return;
  }
  state.indicatorData = data;
  updateColumnLabels(data);
  renderLegend(data);
  renderStats(data);
  renderMaps();
  try { renderAnalysisPanel(data); } catch (e) { console.warn('[Atlas] Panel análisis error:', e); }
  /* Si la pestaña de convergencia está activa, actualizarla */
  if (!document.getElementById('view-convergencia').classList.contains('hidden')) {
    renderConvergenciaView(data);
  }
}

function onLevelChange(level) {
  state.level = level;
  if (dom.btnMunicipal) dom.btnMunicipal.classList.toggle('active', level === 'municipal');
  if (state.indicatorData) { renderLegend(state.indicatorData); renderStats(state.indicatorData); renderMaps(); }
}

/* ══════════════════════════════════════════════════════
   VISTA DE TABLA — con toggle Indicador / Valor Absoluto
   ══════════════════════════════════════════════════════ */
let tableData    = [];
let tableSortCol = 4;
let tableSortAsc = false;

function setTableMode(mode) {
  tableMode = mode;
  $('btn-table-indicator')?.classList.toggle('active', mode === 'indicator');
  $('btn-table-absolute')?.classList.toggle('active', mode === 'absolute');
  if (state.indicatorData) renderTableRows(state.indicatorData);
}

function renderTable(data) {
  if (!data) return;
  tableData = [];
  for (const [id, entry] of data.mun) {
    const cat  = classify(entry.v2 ?? entry.v1, data.thresholds, getIndicatorDir(data));
    const diff = (entry.v1 !== null && entry.v2 !== null) ? (entry.v2 - entry.v1) : null;
    const adiff = (entry.a1 !== null && entry.a2 !== null) ? (entry.a2 - entry.a1) : null;
    const dep  = getDepartamento(id);
    tableData.push({ id, name: entry.name, dep, v1: entry.v1, v2: entry.v2, diff, a1: entry.a1, a2: entry.a2, adiff, cat });
  }

  // Toggle Indicador / Valor Absoluto — solo mostrar si hay absolutos
  const toolbar = $('table-mode-toggle');
  if (toolbar) {
    toolbar.style.display = data.hasAbsolute ? 'flex' : 'none';
    $('btn-table-indicator')?.classList.toggle('active', tableMode === 'indicator');
    $('btn-table-absolute')?.classList.toggle('active',  tableMode === 'absolute');
  }

  renderTableRows(data);

  document.querySelectorAll('.data-table th').forEach((th, i) => {
    th.onclick = () => {
      if (tableSortCol === i) tableSortAsc = !tableSortAsc;
      else { tableSortCol = i; tableSortAsc = i < 3; }
      renderTableRows(data);
    };
  });

  const searchEl = $('table-search');
  if (searchEl) searchEl.oninput = () => renderTableRows(data);
  const csvBtn = $('btn-download-csv');
  if (csvBtn) csvBtn.onclick = () => downloadCSV(data);
}

function renderTableRows(data) {
  const q   = ($('table-search')?.value || '').toLowerCase();
  const dir = getIndicatorDir(data);
  const useAbs = tableMode === 'absolute' && data.hasAbsolute;

  let rows = tableData.filter(r => !q || r.name.toLowerCase().includes(q) || r.dep.toLowerCase().includes(q));

  rows.sort((a, b) => {
    let va, vb;
    if      (tableSortCol === 0) { va = a.id;   vb = b.id; }
    else if (tableSortCol === 1) { va = a.name; vb = b.name; }
    else if (tableSortCol === 2) { va = a.dep;  vb = b.dep; }
    else if (tableSortCol === 3) { va = useAbs ? (a.a1 ?? -Infinity) : (a.v1 ?? -Infinity); vb = useAbs ? (b.a1 ?? -Infinity) : (b.v1 ?? -Infinity); }
    else if (tableSortCol === 4) { va = useAbs ? (a.a2 ?? -Infinity) : (a.v2 ?? -Infinity); vb = useAbs ? (b.a2 ?? -Infinity) : (b.v2 ?? -Infinity); }
    else if (tableSortCol === 5) { va = useAbs ? (a.adiff ?? -Infinity) : (a.diff ?? -Infinity); vb = useAbs ? (b.adiff ?? -Infinity) : (b.diff ?? -Infinity); }
    else { va = a.cat; vb = b.cat; }
    if (va < vb) return tableSortAsc ? -1 : 1;
    if (va > vb) return tableSortAsc ? 1 : -1;
    return 0;
  });

  const col1 = useAbs ? (data.absLabels.v1 || data.colLabels.v1) : data.colLabels.v1;
  const col2 = useAbs ? (data.absLabels.v2 || data.colLabels.v2) : data.colLabels.v2;
  const th3 = $('th-v1'), th4 = $('th-v2');
  if (th3) th3.textContent = col1;
  if (th4) th4.textContent = col2;

  const tbody = $('table-body');
  if (!tbody) return;

  tbody.innerHTML = rows.map(r => {
    const val1 = useAbs ? r.a1 : r.v1;
    const val2 = useAbs ? r.a2 : r.v2;
    const diff = useAbs ? r.adiff : r.diff;
    // En modo indicador, el color del cambio depende de si es favorable
    // En modo absoluto, solo mostramos positivo/negativo como referencia
    const favorable = diff === null ? null : useAbs ? (diff > 0) : (dir === 'asc' ? diff > 0 : diff < 0);
    const diffClass = diff === null ? '' : favorable ? 'td-positive' : 'td-negative';
    const diffIcon  = diff !== null ? (favorable ? '▲ ' : '▼ ') : '';
    const diffStr   = diff !== null ? diffIcon + (diff >= 0 ? '+' : '') + fmtNum(diff) : '—';
    return `<tr>
      <td class="td-code">${r.id}</td>
      <td><strong>${r.name}</strong></td>
      <td class="td-dep">${r.dep}</td>
      <td class="td-num">${fmtNum(val1)}</td>
      <td class="td-num">${fmtNum(val2)}</td>
      <td class="td-num ${diffClass}">${diffStr}</td>
      <td>
        <div class="td-class-wrap">
          <span class="mun-card-status ${r.cat ? 'status-'+r.cat : ''}">${classLabel(r.cat)}</span>
          <span class="td-class-period">${data.colLabels.v2}</span>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function downloadCSV(data) {
  const dir = getIndicatorDir(data);
  const useAbs = tableMode === 'absolute' && data.hasAbsolute;
  const col1 = useAbs ? (data.absLabels.v1 || data.colLabels.v1) : data.colLabels.v1;
  const col2 = useAbs ? (data.absLabels.v2 || data.colLabels.v2) : data.colLabels.v2;
  const tipo = useAbs ? 'Valor absoluto' : 'Indicador';
  const rows = [[`Código`,`Municipio`,`Departamento`,`${tipo} ${col1}`,`${tipo} ${col2}`,`Cambio`,`Clasificación (${data.colLabels.v2})`]];
  for (const r of tableData) {
    const v1 = useAbs ? r.a1 : r.v1;
    const v2 = useAbs ? r.a2 : r.v2;
    const diff = useAbs ? r.adiff : r.diff;
    rows.push([r.id, r.name, r.dep, v1 ?? '', v2 ?? '', diff !== null ? fmtNum(diff) : '', classLabel(r.cat)]);
  }
  const csv = rows.map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = (data.indicatorCode || 'indicador') + (useAbs ? '_absoluto' : '_indicador') + '.csv';
  a.click();
}

async function init() {
  setLoading(true, 'Iniciando atlas…');
  initMaps();
  await loadGeoJSON();
  await loadAvailableIndicators();

  /* Clonar opciones al selector de convergencia */
  const mainSel = $('indicator-select');
  const convSel = $('conv-indicator-select');
  if (mainSel && convSel) {
    convSel.innerHTML = mainSel.innerHTML;
    convSel.addEventListener('change', e => {
      const opt  = convSel.options[convSel.selectedIndex];
      const idx  = opt ? parseInt(opt.dataset.idx) : -1;
      const ind  = (idx >= 0 && idx < INDICATOR_FILES.length) ? INDICATOR_FILES[idx] : INDICATOR_FILES.find(i => i.file === e.target.value);
      const tKey = ind?.thresholdKey || null;
      /* También sincronizar el selector principal */
      if (mainSel) mainSel.value = e.target.value;
      onIndicatorChange(e.target.value, tKey);
    });
  }

  initSearch();
  const selEl = $('indicator-select');
  if (selEl) selEl.addEventListener('change', e => {
    const opt  = selEl.options[selEl.selectedIndex];
    const idx  = opt ? parseInt(opt.dataset.idx) : -1;
    const ind  = (idx >= 0 && idx < INDICATOR_FILES.length) ? INDICATOR_FILES[idx] : INDICATOR_FILES.find(i => i.file === e.target.value);
    const tKey = ind?.thresholdKey || null;
    /* Sincronizar selector convergencia */
    if (convSel) convSel.value = e.target.value;
    onIndicatorChange(e.target.value, tKey);
  });
  if (dom.btnMunicipal) dom.btnMunicipal.addEventListener('click', () => onLevelChange('municipal'));
  if (dom.btnExport)    dom.btnExport.addEventListener('click', exportPNG);
  if (dom.btnFullscreen) dom.btnFullscreen.addEventListener('click', toggleFullscreen);
  // Toggle de tabla
  $('btn-table-indicator')?.addEventListener('click', () => setTableMode('indicator'));
  $('btn-table-absolute')?.addEventListener('click',  () => setTableMode('absolute'));
  document.addEventListener('mousemove', e => {
    const tt = $('map-tooltip');
    if (tt && !tt.classList.contains('hidden')) positionTooltip(e);
  });
  setLoading(false);
}

function enterAtlasAndLoad() {
  document.getElementById('landing-page').classList.add('hidden');
  document.getElementById('atlas-app').classList.remove('hidden');
  setTimeout(() => {
    if (mapLeft)  mapLeft.invalidateSize();
    if (mapRight) mapRight.invalidateSize();
    const sel = $('indicator-select');
    if (sel && sel.options.length > 1) {
      const firstOpt = sel.options[1]; // primera opción disponible (index 0 es el placeholder)
      sel.value = firstOpt.value;
      const idx = parseInt(firstOpt.dataset.idx || '0');
      const ind = (idx >= 0 && idx < INDICATOR_FILES.length) ? INDICATOR_FILES[idx] : null;
      const tKey = ind?.thresholdKey || null;
      onIndicatorChange(firstOpt.value, tKey);
    }
  }, 150);
}

document.addEventListener('DOMContentLoaded', init);
