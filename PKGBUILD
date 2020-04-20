# Maintainer: Peter Cai <peter at typeblog dot net>

pkgname=unciv
_pkgname=Unciv
_gradle_ver=6.2.2 # This package does not work with system gradle
pkgver=3.7.6.REL
_pkgver=${pkgver%.*}-patch${pkgver##*.}
_pkgver=${_pkgver/-patchREL/}
pkgrel=1
_srcdir=$_pkgname-$_pkgver
pkgdesc="Open-source remake of Civilization V"
url="https://github.com/yairm210/Unciv"
license=('MPL-2.0')
depends=('jre8-openjdk' 'bash' 'xorg-xrandr')
makedepends=('jdk8-openjdk')
arch=('any')
source=(
  "https://github.com/yairm210/Unciv/archive/$_pkgver.zip"
  "https://services.gradle.org/distributions/gradle-$_gradle_ver-all.zip"
  "$_pkgname.sh"
  "$pkgname.desktop"
)
noextract=("gradle-$_gradle_ver-all.zip")
md5sums=('0278bf554b20defe23c3fd8c19a214cc'
         'bd27cb8a515725f9e86785856b7e41d5'
         'f8eab098f20681b8db232cc5709713d3'
         '42d5f7ea8ee48d2d643d070786f039ba')

prepare() {
  # Use gradle downloaded by our pkgbuild to allow caching
  sed -i "6s|https\\\://services.gradle.org/distributions|../../../|" $_srcdir/gradle/wrapper/gradle-wrapper.properties
}

build() {
  cd $_srcdir
  unset _JAVA_OPTIONS
  export PATH=/usr/lib/jvm/java-8-openjdk/jre/bin/:$PATH
  GRADLE_USER_HOME="$srcdir" ./gradlew desktop:dist
}

package() {
  install -Dm755 $_pkgname.sh "$pkgdir/usr/bin/$_pkgname"
  install -Dm644 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 $_srcdir/extraImages/"Unciv icon v4.png" "$pkgdir/usr/share/pixmaps/unciv.png"
  install -Dm644 $_srcdir/desktop/build/libs/$_pkgname.jar "$pkgdir/usr/share/$_pkgname/$_pkgname.jar"
}
