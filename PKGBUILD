# Maintainer: Kyle Westhaus <kwesthaus+aur at gmail dot com>
# Maintainer: Kevin Orr <kevinorr54+aur at gmail dot com>
# Contributor: Kaley Main <kaleypoole17 at gmail dot com>
# Contributor: John Trengrove <john at retrofilter dot com>

pkgname=dgraph-bin
pkgver=20.07.2
pkgrel=1
pkgdesc='Fast, transactional, distributed graph database'
arch=('x86_64')
url='https://github.com/dgraph-io/dgraph'
license=('APACHE' 'custom:DCL')
provides=('dgraph')
conflicts=('dgraph' 'dgraph-git')
source=("dgraph-$pkgver.tar.gz::$url/releases/download/v$pkgver/dgraph-linux-amd64.tar.gz"
        "dgraph-$pkgver.tar.gz.sha256::$url/releases/download/v$pkgver/dgraph-checksum-linux-amd64.sha256"
        "https://raw.githubusercontent.com/dgraph-io/dgraph/v$pkgver/licenses/DCL.txt"
        'dgraph.service'
        'dgraph-zero.service'
        'dgraph-ratel.service')
sha256sums=('6edb76731e9e82857994dac4cfee996dd05153e0cb05f874c4e1ddc806ccf477'
            '80e9ae796c4223d0a4a0bc588d6b6592e4ec2388bace500aee6efba91f7d2090'
            'bfdc75136567068dd049c2d226049a57de5f4a1871eab7429c022e95952efb0d'
            '94449db0bbd30aca993dbc6486fbec615e2cada7cd3d91e6b99d6a426a5d7ace'
            '402c5a022615f47d26db47f375f242638d04abbed3bfd22f86067f8f19031f83'
            '5e0cefcfa0d86ae896383bc76df46cdf28933aabf06918d89269b3b6b4b0e1db')

package() {
  cd "$srcdir"
  install -Dm644 DCL.txt "$pkgdir/usr/share/licenses/$pkgname/DCL.txt"
  for binary in dgraph dgraph-ratel badger; do
    install -Dm755 $binary "$pkgdir/usr/bin/$binary"
  done
  install -Dm644 dgraph.service "$pkgdir/usr/lib/systemd/system/dgraph.service"
  install -Dm644 dgraph-zero.service "$pkgdir/usr/lib/systemd/system/dgraph-zero.service"
  install -Dm644 dgraph-ratel.service "$pkgdir/usr/lib/systemd/system/dgraph-ratel.service"
  install -d "$pkgdir/var/lib/dgraph/data"
}

# vim:set ts=2 sw=2 et:
