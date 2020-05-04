pkgname=jicofo
pkgver=1.0_567
_tag="jitsi-meet_4548"
pkgrel=1
pkgdesc="JItsi meet COnference FOcus"
arch=("x86_64")
url="https://github.com/jitsi/jicofo"
license=("Apache")
depends=("java-runtime-headless")
makedepends=("git" "unzip" "maven")
backup=("etc/jicofo/jicofo.conf")
source=($pkgname-$pkgver.tar.gz::https://github.com/jitsi/jicofo/archive/stable/${_tag}.tar.gz
        service config)
sha256sums=('cebbd2ad2c4c3b9826123ab8d49c4a11d34f4e91482e3f06af695e17d1133595'
            'c1e17cf1de2274d375d08afee1853e1314d74763ec600b7bba740cfb7df09258'
            'fea884f52b5c91b7514212d989fae36fd2113967c2617fae1b686ac6c774a7f8')

build() {
    cd "${srcdir}/${pkgname}-stable-$_tag"
    mvn package -DskipTests -Dassembly.skipAssembly=false
    unzip -o target/jicofo-1.1-SNAPSHOT-archive.zip
}

package() {
    install -d "${pkgdir}/opt"
    cp -R "${srcdir}/${pkgname}-stable-${_tag}/jicofo-1.1-SNAPSHOT/" "${pkgdir}/opt/jicofo"
    install -Dm644 service "$pkgdir"/usr/lib/systemd/system/jicofo.service
    install -Dm644 config "$pkgdir"/etc/jicofo/jicofo.conf
}
