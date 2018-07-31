# Maintainer: Bian Jiaping <ssbianjp [AT] gmail.com>

pkgname=besttrace
pkgver=1.2
pkgrel=2
pkgdesc="IPIP.net 开发的加强版 traceroute，附带链路可视化"
arch=('x86_64' 'i686')
url="https://www.ipip.net/download.html"
license=('custom')
install=besttrace.install

if [ "${CARCH}" = "i686" ]; then
    _filename=besttrace32
else
    _filename=besttrace
fi

source=("https://cdn.ipip.net/17mon/besttrace4linux.zip")
md5sums=("e209a35be256e25289ac7c581d60028d")

package(){
    mkdir -p "$pkgdir"/usr/bin/

    install -m755 "$srcdir"/$_filename "$pkgdir"/usr/bin/besttrace
}
