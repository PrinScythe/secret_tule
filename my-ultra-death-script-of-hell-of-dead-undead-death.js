const hashValue = val =>
    crypto.subtle
        .digest('SHA-256', new TextEncoder('utf-8').encode(val))
        .then(h => {
            let hexes = [],
                view = new DataView(h);
            for (let i = 0; i < view.byteLength; i += 4)
                hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
            return hexes.join('');
        });

function dosomething() {
    document.getElementById('error1').classList.add('errorHide');
    document.getElementById('error1').classList.remove('error');
    document.getElementById('error2').classList.add('errorHide');
    document.getElementById('error2').classList.remove('error');

    const code = document.getElementById("code").value;
    const heil = document.querySelector('input[name="heil"]:checked')?.value;
    if (code == null || code.trim() == '' || heil == null || heil.trim() == '') {
        if (code == null || code.trim() == '') {
            document.getElementById('error1').classList.remove('errorHide');
            document.getElementById('error1').classList.add('error');
        }
        if (heil == null || heil.trim() == '') {
            document.getElementById('error2').classList.remove('errorHide');
            document.getElementById('error2').classList.add('error');
        }
        return;
    };

    hashValue(code).then(codeHash => {
        if (codeHash == '65e29476f84d3bb4c2df04b3f59b3b02f192104a5d76e85eb04bcd2b499086e6')
            hashValue(heil).then(heilHash => {
                if (heilHash == 'dc03c80655fc9c5a1a7fcf0e02c27407a29550e88fab3a1b9acc9986b29d40be')
                    window.location.replace("https://youtu.be/isyMHz6pgp4");
                else
                    window.location.replace("https://youtu.be/ss4bdWou8dY");
            })
        else {
            document.getElementById('error1').classList.remove('errorHide');
            document.getElementById('error1').classList.add('error');
        }
    });
}
