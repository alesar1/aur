# Maintainer: Peter Cai <peter at typeblog dot net>
# Thanks: Kevin MacMartin <prurigro at gmail dot com>

pkgname=shattered-pixel-dungeon
_pkgname=$pkgname-gdx
pkgver=0.7.4
_srcdir=$_pkgname-$pkgver
pkgrel=1
pkgdesc='Shattered fork of the popular rogue-like game'
url='http://shatteredpixel.tumblr.com'
license=('GPL3')
depends=('java-runtime' 'bash' 'xorg-xrandr')
makedepends=('git' 'gradle' 'java-environment' 'jdk8-openjdk')
conflicts=('shattered-pixel-dungeon-git')
arch=('any')
source=(
  "https://github.com/00-Evan/shattered-pixel-dungeon-gdx/archive/v$pkgver.tar.gz"
  "$pkgname.sh"
  "$pkgname.desktop"
)
sha512sums=('7604208e20541c3da85fee32e928cd7c514a4b0f999e0f011b40443d18ecbb8ddb047e565563d02fa1384c165e4e497c8cf29ab4cc4c8b06ed1e1b7097eb0f85'
            '88814d1f33eea6bd5656d3ca731ed5a6cfce10ecdae24012252c5b32c4b194ec75fb0e22cac70897802679086c6a32e210d52933ec45ca94ff350ac4ad7c266e'
            '204a7bcedbbc14bdad6586e4b759b326191a7fd2c344dadc7032495d4caa5fe32edac4118d7294229a6fe24f6684416fff37e260bbc9dde9e50846a03ba77db8')

prepare() {
  # Hack to use system gradle (thanks to @jonathon on AUR)
  sed -i '164c/usr/bin/gradle "$@"' "$_srcdir"/gradlew
}

build() {
  cd $_srcdir
  unset _JAVA_OPTIONS
  # Force the system to build the package using JDK8
  export PATH=/usr/lib/jvm/java-8-openjdk/jre/bin/:$PATH
  GRADLE_USER_HOME="$srcdir" ./gradlew desktop:dist
}

package() {
  install -Dm755 $pkgname.sh "$pkgdir/usr/bin/$pkgname"
  install -Dm644 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 $_srcdir/android/res/drawable-xxxhdpi/ic_launcher.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm644 $_srcdir/desktop/build/libs/desktop-*.jar "$pkgdir/usr/share/$pkgname/$pkgname.jar"
}
