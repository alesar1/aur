# Maintainer: Jefferson Gonzalez <jgmdev@gmail.com>
# Contributor: Phillip Smith <fukawi2@NO-SPAM.gmail.com>
# Contributor: Christoph Zeiler <rabyte*gmail>

pkgname=firetable
pkgver=5.5
pkgrel=3
pkgdesc="Tool written in PHP to maintain IPtables firewalls under Linux"
arch=('any')
url="http://projects.leisink.net/Firetable/"
license=('GPL')
depends=('iptables' 'php')
makedepends=('patch')
backup=(
  'etc/firetable/firetable.conf'
  'etc/firetable/ipv6_eth0'
  'etc/firetable/ipv4_eth0'
)
install="${pkgname}.install"
source=(
  "https://gitlab.com/hsleisink/$pkgname/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz"
  "${pkgname}.service"
  "firetable.patch"
)
md5sums=(
  '778a59c129c87167a9f30fefb9283098'
  '64a49e485f646c75abe53d29736674e6'
  '0ff6c1ae205fe074ede25fa84ff8c988'
)

prepare() {
  cd "$srcdir"/$pkgname-v$pkgver

  patch -p0 < "$srcdir"/firetable.patch

  sed -i "s|/sbin/iptables|/usr/bin/iptables|g" src/firetable
  sed -i "s|/sbin/ip6tables|/usr/bin/ip6tables|g" src/firetable
}

package() {
  cd "$srcdir"/$pkgname-v$pkgver

  make DESTDIR="$pkgdir" install

  # install systemd service unit
  install -Dm644 "$srcdir"/${pkgname}.service "$pkgdir"/etc/systemd/system/${pkgname}.service

  mkdir "$pkgdir"/usr/bin/

  mv "$pkgdir"/usr/sbin/* "$pkgdir"/usr/bin/
  rm -rf "$pkgdir"/usr/sbin/
}
