# Maintainer: redfish <redfish at galactica dot pw>

pkgname='zeronet'
pkgver=0.6.4
pkgrel=2
arch=('any')
url="https://zeronet.io/"
depends=('python2'
         'python2-gevent'
         'python2-msgpack')
optdepends=('tor: anonymity')
license=('GPL2')
pkgdesc="Decentralized websites using Bitcoin crypto and the BitTorrent network."
source=("https://github.com/HelloZeroNet/ZeroNet/archive/v$pkgver.tar.gz"
        "zeronet.conf"
        "zeronet.service")
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

sha256sums=('e37a2acb1313d4e170bab2e7b469288916630cb1d4717aec0e2a188f92721f57'
            'ea735e82dbb10a2c1fda7abfeb2f38c2429044d8254f9e2396c50cecb6f778f8'
            '8e8df96340cb342b6262ac498292749e01ce5f713b03d5e31384b1f289d9ca62')
