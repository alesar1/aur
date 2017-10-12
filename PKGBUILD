# Maintainer: Dan McCurry <dan.mc at protonmail dot com>
# Contributer: Nikola Milinković <nikmil@gmail.com>
# Submitter: Stefan Husmann <stefan-husmann@t-online.de>

# If an unsupported java environment is set using archlinux-java,
# uncomment/edit the appropriate line in /usr/bin/jabref after
# installation.

pkgname=jabref-git
pkgver=2.9.2.r7414.gef7f8248b
epoch=1
pkgrel=1
pkgdesc="GUI frontend for BibTeX, written in Java -- built from git"
arch=('any')
url="https://www.jabref.org"
license=('MIT')
depends=('java-environment>=8')
makedepends=('git' 'java-environment=8' 'java-openjfx')
optdepends=('gsettings-desktop-schemas: For web search support')
provides=('jabref')
conflicts=('jabref')
source=("${pkgname%-git}::git+https://github.com/JabRef/jabref.git"
	"${pkgname%-git}.desktop"
	"${pkgname%-git}.sh")
md5sums=('SKIP'
         '5f76feb6b2f66a2ea8b52bca999a934f'
         '0b052f22c614f89f9ce854fdd1e5a3c8')

pkgver() {
  cd ${srcdir}/${pkgname%-git}
  git describe --long | sed 's/^v_//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/${pkgname%-git}"
  PATH=/usr/lib/jvm/java-8-openjdk/jre/bin/:$PATH
  
  ./gradlew releaseJar
}

package() {
  cd "${srcdir}/${pkgname%-git}"

  _release=$(sed -n 's/.*version = \"\(.*-dev\)\"/\1/p' build.gradle)

  find "${srcdir}/${pkgname%-git}/build/releases" \
	  -iname "JabRef-${_release}.jar" \
	  -exec install -Dm644 {} ${pkgdir}/usr/share/java/jabref/JabRef.jar \;

  install -Dm755 $srcdir/jabref.sh ${pkgdir}/usr/bin/jabref

  install -Dm644 $srcdir/jabref.desktop \
    ${pkgdir}/usr/share/applications/jabref.desktop

  install -Dm644 "build/resources/main/icons/${pkgname%-git}.svg" \
    "${pkgdir}/usr/share/pixmaps/${pkgname%-git}.svg"

  install -Dm644 LICENSE.md ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
