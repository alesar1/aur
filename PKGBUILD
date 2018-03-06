# Maintainer: redfish <redfish at galactica dot pw>

pkgname='zeronet'
pkgver=0.6.2
pkgrel=1
arch=('any')
url="https://zeronet.io/"
depends=('python2>=2.7.10'
         'python2-gevent'
         'python2-msgpack')
optdepends=('tor>=0.3.0.0: anonymity')
license=('GPL2')
pkgdesc="Decentralized websites using Bitcoin crypto and the BitTorrent network."
source=("https://github.com/HelloZeroNet/ZeroNet/archive/v$pkgver.tar.gz"
        "zeronet.conf"
        "zeronet.service")
md5sums=('5b6112a5b14f5314aadb7634e60ed04a'
         'c5216860cfc435a4861c55fd3933391c'
         '5404c37540131f41f10e9be873d11fcc')
install="zeronet.install"
backup=("etc/zeronet.conf")
options=(!strip) # ignore test binaries in the depsendency libs that fail strip

# Upstream uses camel case
_pkgarchive="ZeroNet-$pkgver"

package() {
   mkdir -p "$pkgdir/opt/zeronet"

   # There is no setup.py shipped, so brute-force copy
   cp -a "$srcdir/$_pkgarchive/." "$pkgdir/opt/zeronet/"

   install -D -m644 "$srcdir/zeronet.conf" "$pkgdir/etc/zeronet.conf"
   install -D -m644 "$srcdir/zeronet.service" "$pkgdir/usr/lib/systemd/system/zeronet.service"

   install -D -m644 "$srcdir/$_pkgarchive/LICENSE" "$pkgdir/usr/share/licenses/$_pkgarchive/LICENSE"
}
