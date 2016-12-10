# Maintainer: ouyangjun<oyj805557641@gmail.com>

pkgname='cookie-cadger'
pkgver='1.08'
pkgrel=1
groups=('blackarch' 'blackarch-fuzzer' 'blackarch-scanner')
pkgdesc='An auditing tool for Wi-Fi or wired Ethernet connections.'
url='https://cookiecadger.com/'
arch=('any')
license=('custom:FreeBSD')
depends=('java-environment' 'wireshark-cli')
noextract=("CookieCadger-${pkgver}.jar")
source=("https://www.cookiecadger.com/files/CookieCadger-${pkgver}.jar")
sha1sums=('a5d511fc53fae2028fe86f19f14804fa3fd23b19')

package() {
  cd "$srcdir"

  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/cookie-cadger"

  cp -L CookieCadger-${pkgver}.jar "$pkgdir/usr/share/cookie-cadger"

  cat > "$pkgdir/usr/bin/cookie-cadger" << EOF
#!/bin/sh
cd /usr/share/cookie-cadger
exec java -jar CookieCadger-${pkgver}.jar "\$@"
EOF

  chmod +x "$pkgdir/usr/bin/cookie-cadger"
}
