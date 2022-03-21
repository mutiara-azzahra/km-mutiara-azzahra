console.log("REST API");
/* 
API: sumber informasi/data yang digunakan untuk suatu aplikasi
Rest API: penghubung

HTTP status
301: Redirect permanen > gabisa balik
302: Redirect temporary > bisa balik lagi

307: Redirect temporary with data

400:

unauthorized (tidak terdaftar) 
-> ngirim headers: {author: token}
401: if token true > mengembaliin data ke aplikasi

404:

405:

500++: error server down > membalikkan bad gateway
 */
