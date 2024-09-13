const path = require("path");

const rootDir = path.resolve(__dirname);
const filePath = path.resolve(rootDir, "..", "public");

const cui2192627 = [
  "368-2015",
  "436-2015",
  "455-2015",
  "484-2015",
  "663-2015",
  "1123-2014",
  "1154-2014",
  "1183-2014",
  "1211-2014",
  "1287-2014",
  "1297-2014",
  "1322-2014",
  "1376-2014",
  "1438-2014",
  "1465-2014",
  "1485-2014",
  "1566-2014",
  "1579-2014",
  "1596-2014",
  "1617-2014",
  "1636-2014",
  "1660-2014",
  "1675-2014",
  "1701-2014",
  "1782-2014",
  "1819-2014",
  "1820-2014",
  "1822-2014",
  "1823-2014",
  "1824-2014",
  "1857-2014",
  "1897-2014",
  "2001-2014",
  "2037-2014",
  "2053-2014",
  "2076-2014",
  "2107-2014",
  "2123-2014",
  "2275-2014",
  "2286-2014",
  "2353-2014",
  "2363-2014",
  "2420-2014",
  "2451-2014",
  "2464-2014",
];

const cui2192630 = [
  "435-2015",
  "440-2015",
  "456-2015",
  "490-2015",
  "491-2015",
  "1129-2014",
  "1152-2014",
  "1186-2014",
  "1202-2014",
  "1288-2014",
  "1298-2014",
  "1321-2014",
  "1377-2014",
  "1439-2014",
  "1466-2014",
  "1567-2014",
  "1578-2014",
  "1603-2014",
  "1618-2014",
  "1637-2014",
  "1661-2014",
  "1676-2014",
  "1702-2014",
  "1831-2014",
  "1858-2014",
  "1898-2014",
  "2002-2014",
  "2038-2014",
  "2054-2014",
  "2077-2014",
  "2122-2014",
  "2276-2014",
  "2287-2014",
  "2354-2014",
  "2379-2014",
  "2390-2014",
  "2391-2014",
  "2392-2014",
  "2393-2014",
  "2407-2014",
  "2414-2014",
  "2421-2014",
  "2422-2014",
  "2427-2014",
  "2428-2014",
];

const cui2192631 = [
  "458-2015",
  "488-2015",
  "1128-2014",
  "1149-2014",
  "1191-2014",
  "1204-2014",
  "1289-2014",
  "1299-2014",
  "1320-2014",
  "1348-2014",
  "1349-2014",
  "1378-2014",
  "1441-2014",
  "1468-2014",
  "1568-2014",
  "1577-2014",
  "1598-2014",
  "1619-2014",
  "1638-2014",
  "1662-2014",
  "1666-2014",
  "1677-2014",
  "1703-2014",
  "1783-2014",
  "1794-2014",
  "1826-2014",
  "1859-2014",
  "1899-2014",
  "2003-2014",
  "2039-2014",
  "2055-2014",
  "2074-2014",
  "2081-2014",
  "2124-2014",
  "2277-2014",
  "2288-2014",
  "2355-2014",
  "2364-2014",
  "2415-2014",
  "2453-2014",
  "2465-2014",
];

const cui2192632 = [
  "459-2015",
  "487-2015",
  "1124-2014",
  "1146-2014",
  "1185-2014",
  "1210-2014",
  "1290-2014",
  "1300-2014",
  "1318-2014",
  "1347-2014",
  "1379-2014",
  "1442-2014",
  "1469-2014",
  "1565-2014",
  "1576-2014",
  "1599-2014",
  "1611-2014",
  "1620-2014",
  "1639-2014",
  "1667-2014",
  "1678-2014",
  "1704-2014",
  "1784-2014",
  "1827-2014",
  "1860-2014",
  "1900-2014",
  "2004-2014",
  "2040-2014",
  "2056-2014",
  "2075-2014",
  "2082-2014",
  "2125-2014",
  "2278-2014",
  "2289-2014",
  "2356-2014",
  "2365-2014",
  "2416-2014",
  "2454-2014",
  "2466-2014",
];
const cui2192633 = [
  "  441-2015",
  "460-2015",
  "461-2015",
  "462-2015",
  "485-2015",
  "1132-2014",
  "1151-2014",
  "1187-2014",
  "1208-2014",
  "1291-2014",
  "1301-2014",
  "1317-2014",
  "1380-2014",
  "1443-2014",
  "1470-2014",
  "1564-2014",
  "1575-2014",
  "1602-2014",
  "1621-2014",
  "1640-2014",
  "1668-2014",
  "1679-2014",
  "1705-2014",
  "1832-2014",
  "1862-2014",
  "1901-2014",
  "2005-2014",
  "2041-2014",
  "2057-2014",
  "2071-2014",
  "2126-2014",
  "2279-2014",
  "2290-2014",
  "2358-2014",
  "2366-2014",
  "2408-2014",
  "2417-2014",
  "2423-2014",
  "2424-2014",
  "2455-2014",
];

const cui2192635 = [
  "463-2015",
  "484-2015",
  "486-2015",
  "1130-2014",
  "1153-2014",
  "1184-2014",
  "1205-2014",
  "1292-2014",
  "1302-2014",
  "1316-2014",
  "1359-2014",
  "1381-2014",
  "1444-2014",
  "1472-2014",
  "1563-2014",
  "1574-2014",
  "1600-2014",
  "1622-2014",
  "1641-2014",
  "1669-2014",
  "1680-2014",
  "1706-2014",
  "1785-2014",
  "1801-2014",
  "1809-2014",
  "1810-2014",
  "1863-2014",
  "1902-2014",
  "2006-2014",
  "2042-2014",
  "2058-2014",
  "2072-2014",
  "2104-2014",
  "2127-2014",
  "2280-2014",
  "2291-2014",
  "2359-2014",
  "2380-2014",
  "2409-2014",
  "2431-2014",
  "2432-2014",
  "2456-2014",
  "2467-2014",
];
const cui2192637 = [
  "437-2015",
  "464-2015",
  "465-2015",
  "486-2015",
  "1131-2014",
  "1150-2014",
  "1188-2014",
  "1206-2014",
  "1293-2014",
  "1303-2014",
  "1315-2014",
  "1382-2014",
  "1445-2014",
  "1474-2014",
  "1562-2014",
  "1573-2014",
  "1604-2014",
  "1623-2014",
  "1642-2014",
  "1670-2014",
  "1681-2014",
  "1707-2014",
  "1811-2014",
  "1815-2014",
  "1864-2014",
  "1870-2014",
  "1903-2014",
  "2007-2014",
  "2043-2014",
  "2059-2014",
  "2073-2014",
  "2128-2014",
  "2281-2014",
  "2292-2014",
  "2357-2014",
  "2367-2014",
  "2410-2014",
  "2411-2014",
  "2412-2014",
  "2446-2014",
  "2457-2014",
];

const cui2192638 = [
  "466-2015",
  "686-2015",
  "688-2015",
  "1133-2014",
  "1147-2014",
  "1192-2014",
  "1201-2014",
  "1294-2014",
  "1304-2014",
  "1314-2014",
  "1360-2014",
  "1383-2014",
  "1446-2014",
  "1455-2014",
  "1475-2014",
  "1561-2014",
  "1572-2014",
  "1601-2014",
  "1624-2014",
  "1643-2014",
  "1671-2014",
  "1682-2014",
  "1708-2014",
  "1865-2014",
  "1904-2014",
  "2008-2014",
  "2044-2014",
  "2060-2014",
  "2078-2014",
  "2138-2014",
  "2282-2014",
  "2293-2014",
  "2458-2014",
  "2473-2014",
];

const cui2192639 = [
  "467-2015",
  "485-2015",
  "1127-2014",
  "1148-2014",
  "1182-2014",
  "1203-2014",
  "1295-2014",
  "1305-2014",
  "1313-2014",
  "1384-2014",
  "1447-2014",
  "1476-2014",
  "1560-2014",
  "1571-2014",
  "1587-2014",
  "1592-2014",
  "1595-2014",
  "1608-2014",
  "1625-2014",
  "1644-2014",
  "1663-2014",
  "1672-2014",
  "1683-2014",
  "1709-2014",
  "1866-2014",
  "1905-2014",
  "1979-2014",
  "1980-2014",
  "2009-2014",
  "2045-2014",
  "2061-2014",
  "2129-2014",
  "2141-2014",
  "2142-2014",
  "2271-2014",
  "2283-2014",
  "2294-2014",
  "2360-2014",
  "2368-2014",
  "2425-2014",
  "2459-2014",
  "2468-2014",
];

const cui2216002 = [
  "457-2015",
  "468-2015",
  "484-2015",
  "1125-2014",
  "1145-2014",
  "1190-2014",
  "1209-2014",
  "1296-2014",
  "1306-2014",
  "1312-2014",
  "1385-2014",
  "1448-2014",
  "1480-2014",
  "1558-2014",
  "1570-2014",
  "1588-2014",
  "1593-2014",
  "1626-2014",
  "1645-2014",
  "1664-2014",
  "1673-2014",
  "1684-2014",
  "1710-2014",
  "1856-2014",
  "1867-2014",
  "1906-2014",
  "1981-2014",
  "2010-2014",
  "2046-2014",
  "2062-2014",
  "2079-2014",
  "2130-2014",
  "2272-2014",
  "2284-2014",
  "2295-2014",
  "2361-2014",
  "2369-2014",
  "2418-2014",
  "2460-2014",
  "2470-2014",
];

const cui2216003 = [
  "438-2015",
  "469-2015",
  "489-2015",
  "1126-2014",
  "1144-2014",
  "1189-2014",
  "1212-2014",
  "1286-2014",
  "1307-2014",
  "1311-2014",
  "1343-2014",
  "1344-2014",
  "1386-2014",
  "1449-2014",
  "1481-2014",
  "1559-2014",
  "1569-2014",
  "1589-2014",
  "1594-2014",
  "1627-2014",
  "1646-2014",
  "1665-2014",
  "1674-2014",
  "1685-2014",
  "1711-2014",
  "1868-2014",
  "1907-2014",
  "1982-2014",
  "2011-2014",
  "2026-2014",
  "2047-2014",
  "2063-2014",
  "2131-2014",
  "2273-2014",
  "2285-2014",
  "2296-2014",
  "2362-2014",
  "2370-2014",
  "2413-2014",
  "2419-2014",
  "2426-2014",
  "2461-2014",
  "2471-2014",
];

module.exports = {
  rootDir,
  filePath,
  cuis: {
    cui2192627,
    cui2192630,
    cui2192631,
    cui2192632,
    cui2192633,
    cui2192635,
    cui2192637,
    cui2192638,
    cui2192639,
    cui2216002,
    cui2216003,
  },
  dirFiles: [
    "cui2192627",
    "cui2192630",
    "cui2192631",
    "cui2192632",
    "cui2192633",
    "cui2192635",
    "cui2192637",
    "cui2192638",
    "cui2192639",
    "cui2216002",
    "cui2216003",
  ],
};