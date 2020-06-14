# Contributor: holishing
pkgname=oxwu
pkgver=2.2.1
pkgrel=1
pkgdesc="The GUI software using P2P networking to fastly report Earthquakes in Taiwan"
arch=('x86_64')
url="https://eew.earthquake.tw"
license=('custom')
source=('https://eew.earthquake.tw/releases/OXWU-Setup-linux64.deb')
sha512sums=('c4514dd5831cb9301d512679d419ccff7cdc0c9289ea23bae09e70d161a687e314c2cb4e64e5fcc87209257977ddd2b76de41cba3225c266b69ce137cc2e5ad1')

prepare() {
    bsdtar -xvf data.tar.xz -C "${srcdir}"
    # Fix directories structure differencies (We cannot do this because the path is fixed)
    cd "${srcdir}"
}

package(){
    install -dm755 "${pkgdir}"/opt
    install -dm755 "${pkgdir}"/usr/bin
    install -dm755 "${pkgdir}"/usr/share/applications
    cp -r "${srcdir}"/opt/OXWU "${pkgdir}"/opt/
    mv -v "${pkgdir}"'/opt/OXWU/Program/地牛Wake Up!' "${pkgdir}"'/opt/OXWU/Program/oxwu'
    ln -rsv "${pkgdir}"/opt/OXWU/Program/oxwu "${pkgdir}"/usr/bin/oxwu

    # SystemD user service
    install -Dm644 /dev/stdin "${pkgdir}"/usr/lib/systemd/user/oxwu.service <<END
[Unit]
Description=The GUI software based on NW.js using P2P networking to report Taiwan's Earthquake

[Service]
Environment="LD_LIBRARY_PATH=/opt/OXWU/Program/lib/"
ExecStart='/opt/OXWU/Program/oxwu'

[Install]
WantedBy=default.target
END

    # Application entry
    install -Dm644 /dev/stdin "${pkgdir}"/usr/share/applications/OXWU.desktop <<END
[Desktop Entry]
Name=地牛Wake Up! 
Comment=台灣地震速報
Exec='/opt/OXWU/Program/oxwu'
Icon=/opt/OXWU/Program/app/image/icon.png
Type=Application
Categories=Network;
Encoding=UTF-8
Terminal=false
END
}
