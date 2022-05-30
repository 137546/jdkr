/*
此文件为Node.js专用。其他用户请忽略

 */
//此处填写京东账号cookie。

let CookieJDs = [
         //PLC
        'pt_key=app_openAAJik1mxADCIk8crXTd50QNz1MxR2IVR5BLbN5jK1mzNccWUTjsWPcrN38FT8UqegadCwEdGKps;pt_pin=jd_ujEARVLkFYXE;',
        //1587315
        'pt_key=app_openAAJik1mEADDRgVlkKy6grn3X2krRCuAapBXyPGDKYCXd57VsCa99BSZAeiuACcU8WC3fCimL7bQ;pt_pin=jd_528764c66cbfe;',
        //pxh
        'pt_key=app_openAAJik1nHADCm59YUykunjKl6NHm0dmtJCr5nqgBl81WrrymqqcAkOlC8m2oJOIOu3twXGUPzMeE;pt_pin=jd_6ddc5dbe5adae;',
        //7310
        'pt_key=app_openAAJik1n-ADASS4q4vHgL8_sKusCGzVZc_4DC4iTcYRUGdmyWWNDuZuW3L3htcmbYmQGz4lyU2YY;pt_pin=jd_SBXjbxvTuwbc;',
        //周朵捷
        'pt_key=app_openAAJik1oWADA6ikZ9gwMNuI-9vNddWj6Wa5YYvU2KrJ2DZ8ok6ZOLiiAcpFcKp11fizqWoZ-KuHM;pt_pin=jd_yKJcRidvGGNQ;',
        //王竹林
        'pt_key=app_openAAJik1osAECSy-HCnmg8fuIq8j__pmnSN_6p435QskFMGoxE17L3zbsZKT_k94L_cxA3VflC6eMZk955xRf6dHpodErccgCs;pt_pin=jd_mN86uiIj3uxl7sI;',
        //王一斐
        'pt_key=app_openAAJik1noADAY6dwCldDYC4bWVpzIchXUvGOfcQpkfGUamv4qj2i9dIumOXHNpn0vjqr1qjr-QuQ;pt_pin=yilianyoumeng219;',
        //18184642084
        'pt_key=app_openAAJik1nzADDP2FcEsGjRqRRcoU44rl1UF0qv7hBQtnwxh70vZjUGG6hFVSrBHoL1KevZezPLoOo;pt_pin=jd_fmZVdRzrxGQJ;',
        //1314208
        'pt_key=app_openAAJik1mPADBOmvjt8LaS15A8e9begh-lHToQTlI8dLylakDCnnuKiMzKw5fKwkDSngFnttZIIpk;pt_pin=jd_56a0abaa16ea0;',
        //yangjun
        'pt_key=app_openAAJik1l5ADAn45mIDZPkUesgMPkbbzE9kcpP9A8LSaigkRLt2nl1ab5ntMVukYtjTkPgkgy7bkk;pt_pin=jd_498cf16e21c89;',
        //爱国者
        'pt_key=app_openAAJik1k2ADAadT__atiM2xxSo0wSiKJ4_s7n_UKIH2L5FH8H8YV8ojMatvHFMJuX8W867-AHvEk;pt_pin=jd_67f1cc3e76c49;',
        'pt_key=app_openAAJik1lBADDz7WBo5gQ_d2L2I3w2W2nv0qQAqjVhZnoYUter4j2qZkWuk5Dfi8LkC1RU1T5bdmY;pt_pin=jd_63a936fc7a63c;',
        'pt_key=app_openAAJikM9SADC4jWa3ogPrlfIaLC7qRA72n22sQekmgvBxTwYFhn1IqcS3pb2ADSNOTGMNc_w-Oho;pt_pin=jd_njjJsIVvLgEM;',
        'pt_key=app_openAAJik1oLADAIzA8nPIDv81fWk6WymTdxTnv9i6M4A9D7SMzYSgM_8MH3psHuD62goe9JnCzmhRI;pt_pin=jd_70c98fbed6067;',
        //冯建发
        'pt_key=app_openAAJik1joADDLel4cCb2KQPPOTnbaZySHykFmFFW71l433hIwiFvJdh8V-x5K0AUc4hlJsxeBLJo;pt_pin=jd_78d2e2db2ede4;',
        'pt_key=app_openAAJik1mmADCFQpn86nKEHnEcN0ZZuOhfZt2xvkQudJEyIJpvWWJ6pYKh49DqRDuDPGeueCOfw60;pt_pin=jd_7efa5a5c9d0c5;',
        //马泽锋
        'pt_key=app_openAAJik1lMADD6gmDJXbFTVTtQy1Pz5dG3g-rEPsFDKGoTWjTF-NLGIPJzVJ1JoL0jp4RW6iYevG4;pt_pin=jd_61c3188260e63;',
        'pt_key=app_openAAJik1lXADAijJSdfxB7upjBS04ysrj6E7IFP8bYfaKI8SqsEHS7GafhbmXeJ5Q3rGbqGurZWHw;pt_pin=jd_pdVaBXgEfrNo;',
        'pt_key=app_openAAJik1ljADCWXkVuZRmEjr2RPGwXiVSrOW3JVgJnggxzDP6hi2fKPRE9F3kyv3MeQafVzgtBAYU;pt_pin=jd_6354bb7838837;',
        'pt_key=app_openAAJik1luADDkSpFGB2UZ7ayx_m6tW3ADB79RWByUA29ijOaeGWZxoA7Oh9IrZnW6Evk_1IO0Yr8;pt_pin=%E6%9E%9C%E6%B1%81%E5%A5%BD%E5%96%9D0623;',
        //KGVINCENT
        'pt_key=app_openAAJik1jRADA4h2J3iIJciLuwjanpkFTeq94HayVUS7L0H8rP76SCSO7hXQUWQiqbgaOZd-6VYYk;pt_pin=jd_7b08240dd2144;',
        'pt_key=app_openAAJie7dgADA1ltaE_f9ML1s_QRyato_QcVbB-ImoI6FDAqPCftPQtuKUHAUiqFLQ65PEIlDXsoM;pt_pin=jd_5336e7890d7d1;',
        //飞机
        'pt_key=app_openAAJik1kVADAlV3_8v9o8GNHe4herOHNcnDDxkE5xN86UK3JV0q4bsZtlcAvJzo_ZsDfP8sthwAM;pt_pin=15308963-416600;',
        //Aurora-Kuang 老中医
        'pt_key=app_openAAJik1jzADA1VUAuPgI_34_-wqTUoNEunH8Iv_2mB7K20Bj0ZMf-IjDzoEzTIknAHtmEnDpM6DY;pt_pin=wdSiNncfawYSeo;',
        'pt_key=app_openAAJik1ohADCHy7Gl2D6DFke_D6ECQAjwK7Ri4ysGeI0Dph_dYqid12CAVaZsh2XuccgLh3zPj7Q;pt_pin=jd_tGWqGHxyntGw;',
        //豪
        'pt_key=app_openAAJik1kgADAtjz59UNNr2Oa9TlAP7fy5-a9BNMWVJC_gjjEZmOO3zOy4vL5C1ncFs_41CKDkct8;pt_pin=jd_799b90e62b5d1;',
        'pt_key=app_openAAJik1krADBiHXdLQeXkKgujXNcNP1vFQuBW2yv_-rnfAskNrHCwU6iG--XX00C0dzQtav0F5mg;pt_pin=jd_774fc10a786b5;',
        //wangchaoo01
        'pt_key=app_openAAJik1jcADD2zmlFoCb4dbAmT7g88z-pqoMj8gCP-J_NI5JnjIWUekBEXM3P0bFOx8EDWzIKJ3Y;pt_pin=wangchaoo01;',
        //7311
        'pt_key=app_openAAJik1ndADCKPMPf-zUk_QgAPDvHZ50zfuUGQio8iat0KblMVSjgkKiCoYr783jI2ttD7cxwd4A;pt_pin=jd_guhHyKQxkeNt;',
        //1咸鱼
        'pt_key=as;pt_pin=jd_7b72222e731cf;',
        //1557484
        'pt_key=app_openAAJik1maADBjJnjLlo0SHwb442sBVakgp5LjS6BhZHH9rRpCvNoj7jTvFBWkMVZj8sKhpNTviv4;pt_pin=jd_47e4d88113ce2;',
        //1897484
        'pt_key=app_openAAJik1kKADCq9ByW1V8C8mLjQ6WpPX1tshOKG5x_RPvUyvE8S-pzfHYZ4_hxJlgPaE9q0QNZcTU;pt_pin=jd_7579b61429cf3;',
        //1364748
        'pt_key=app_openAAJik1j_ADCeHOas0PfNsWDT3Dbp3v58NyVDkGHfm7oWNMyENHBauod-pR1iNUMzFQ45GJqwAkw;pt_pin=jd_6385196e5b45f;',

]



CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
//console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
//console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
