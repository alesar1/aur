# Contributor: William Di Luigi <williamdiluigi@gmail.com>
# Contributor: Artjom Simon <artjom.simon@gmail.com>

pkgname=flyway
pkgver=6.0.4
pkgrel=1
pkgdesc="Flyway Community Edition - Database Migrations Made Easy."
arch=('any')
url="https://flywaydb.org/"
license=('Apache')
depends=('java-environment>=8')
source=(https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/$pkgver/flyway-commandline-$pkgver.tar.gz)
sha256sums=('47129b3b6ed0b6b77940bfba281f6f9ed83e90e5184f0801084ee03d98d91258')

package() {
  cd $srcdir

  install -d -m755 $pkgdir/opt/$pkgname
  cp -r $pkgname-$pkgver $pkgdir/opt/$pkgname
  install -d -m755 $pkgdir/usr/bin

  cat << 'EOF' > $pkgdir/usr/bin/flyway
#!/bin/sh
"$JAVA_HOME/bin/java" -cp /opt/flyway/flyway-6.0.4/lib/*:/opt/flyway/flyway-6.0.4/lib/community/*:/opt/flyway/flyway-6.0.4/drivers/* org.flywaydb.commandline.Main "$@"
EOF
  chmod 755 $pkgdir/usr/bin/flyway
}

# vim:set ts=2 sw=2 et:
