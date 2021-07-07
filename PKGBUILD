# Maintainer:  Michael Lass <bevan@bi-co.net>
# Contributor: Hector Mtz-Seara <hseara.at.gmail.com>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: Christian Storm <Christian.Storm@gmx.de>

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=jabref
pkgver=5.3
pkgrel=1
pkgdesc="Graphical Java application for managing BibTeX and biblatex (.bib) databases"
arch=(any)
url="https://www.jabref.org/"
license=(MIT)
depends=('archlinux-java-run>=7' 'java-runtime>=14')
makedepends=('gradle' 'java-environment>=14')
options=(!strip !emptydirs)
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/JabRef/jabref/archive/v${pkgver}.tar.gz
        jabref.sh
        jabref.desktop)
sha256sums=('a75f471304d39bc2a8eb6fa99b4d249b6d71d9243b453e3baa60fde71cf93705'
            '4b2744dce0640db52891cbd55e2548650a79a88bf9770c2ae460f9ed577fddcd'
            'c6c95fc980630bc72bd4adcc93c710702fe4fced3fcb26c3067eea0f3aad5c68')

# Note on supported Java versions:
# The file build.gradle contains the version of Java that is required and tested.
# Newer versions typically work as well. However, if using the supplied gradle
# wrapper, it may use an old version of gradle that limits support for newer Java
# versions.

build() {
  cd ${pkgname}-${pkgver}

  mkdir -p "${srcdir}"/gradle
  export GRADLE_USER_HOME=${srcdir}/gradle

  export JAVA_HOME=$(archlinux-java-run -a 14 -f jdk -j)
  echo "Using JDK from $JAVA_HOME to build JabRef."

  # ./gradlew \
  /usr/bin/gradle \
    --no-daemon \
    -PprojVersion="${pkgver}" \
    -PprojVersionInfo="${pkgver}--ArchLinux--${pkgrel}" \
    assemble
}

package() {
  install -dm755 "${pkgdir}"/usr/share/java/${pkgname}
  install -Dm755 jabref.sh "${pkgdir}"/usr/bin/JabRef
  install -Dm644 jabref.desktop "${pkgdir}"/usr/share/applications/${pkgname}.desktop

  cd ${pkgname}-${pkgver}
  install -Dm644 LICENSE.md "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE.md
  install -Dm644 src/main/resources/icons/jabref.svg "${pkgdir}"/usr/share/pixmaps/${pkgname}.svg

  # script to support browser extensions
  install -Dm755 buildres/linux/jabrefHost.py "${pkgdir}"/opt/jabref/lib/jabrefHost.py

  # lowercase alias (for convenience and required for browser extensions)
  ln -sf /usr/bin/JabRef "${pkgdir}"/usr/bin/jabref

  cd build
  cp -r resources "${pkgdir}"/usr/share/java/${pkgname}
  tar xf distributions/JabRef-${pkgver}.tar -C "${pkgdir}"/usr/share/java/${pkgname} JabRef-${pkgver}/lib --strip-components=1
}
