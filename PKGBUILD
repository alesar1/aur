# Maintainer: Artjom Simon <hello@artjomsimon.berlin>
# Contributor: William Di Luigi <williamdiluigi@gmail.com>

pkgname=flyway
pkgver=8.5.9
pkgrel=1
pkgdesc="Database migration utility written Java, supporting a wide range of databases"
arch=('any')
url="https://flywaydb.org/"
license=('Apache')
depends=('java-environment>=8')
source=(https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/$pkgver/flyway-commandline-$pkgver.tar.gz)
sha512sums=('ce844f7fc6f5009f994123b1a8b070b599910df4b30c5296ee96a42b8c3387b279c7a06cb73c3609bbaf5fe2c66ed073779d686b173986a62a68de24e67eebf3')

package() {
  cd $srcdir

  install -d -m755 $pkgdir/opt/$pkgname
  cp -r $pkgname-$pkgver $pkgdir/opt/$pkgname
  install -d -m755 $pkgdir/usr/bin

  cat << 'EOF' > $pkgdir/usr/bin/flyway
#!/bin/sh
"$JAVA_HOME/bin/java" -cp /opt/flyway/flyway-8.5.9/lib/*:/opt/flyway/flyway-8.5.9/lib/community/*:/opt/flyway/flyway-8.5.9/drivers/* org.flywaydb.commandline.Main "$@"
EOF
  chmod 755 $pkgdir/usr/bin/flyway
}

# vim:set ts=2 sw=2 et:
