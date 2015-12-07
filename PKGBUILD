# Maintainer: Caleb Johnson <me@calebj.io>
_pkgname=pcgen
pkgname=${_pkgname}-git
provides=pcgen
pkgrel=2
pkgver=6.05.06.g0a2ebc1
conflicts=pcgen
pkgdesc="An RPG Character Generator."
arch=(any)
url=http://pcgen.org
license=LGPL2
depends=(sh java-runtime gtk-update-icon-cache desktop-file-utils shared-mime-info)
makedepends=(git gradle java-environment)
source=("${pkgname}"::'git+http://github.com/PCGen/pcgen.git'
        ${_pkgname}.xml
        ${_pkgname}.desktop
        ${_pkgname}.sh
        config.ini
        specifyconfig.patch)
sha256sums=('SKIP'
            'ddc882d843d9afa80ae82934619b7a54380e8b7b45b78d5236589e358ea82b62'
            'c0350cf4b92b8a417399ba27e072ffa27a729c391ee7260bd9e30db3daaedb21'
            '79604420bc3667555da1ed74f3e644b3f09d5c6b23d1d9f00230fef3e9436091'
            '6c14727dcde94d2fe6bfc977d48e8e65a7efbb7ccc2741fd2c95ffff820a7075'
            '3bc034fc427b20f53bbcc8ac617bff81bd851d1895d7aed385f0c0afc5f37f8a')

pkgver(){
    cd "${srcdir}/${pkgname}"
    echo $(grep 'version=' gradle.properties | cut -d'=' -f2 | sed 's/-SNAPSHOT//').g$(git rev-parse --short HEAD)
}

build(){
    cd "${srcdir}/${pkgname}"
    patch -p1 < ../specifyconfig.patch
    ./gradlew
}

package(){
  cd "$srcdir"
  install -Dm644 ${_pkgname}.xml "${pkgdir}/usr/share/mime/packages/${_pkgname}.xml"
  install -Dm644 ${_pkgname}.desktop "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -Dm755 ${_pkgname}.sh "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 config.ini "${pkgdir}/usr/share/java/pcgen/config.ini"
  install -Dm644 ${pkgname}/pcgen.jar "${pkgdir}/usr/share/java/pcgen/pcgen.jar"
  install -Dm644 ${pkgname}/pcgen-batch-convert.jar "${pkgdir}/usr/share/java/pcgen/pcgen-batch-convert.jar"
  install -Dm644 ${pkgname}/code/src/images/PCGenApp.png \
    "${pkgdir}/usr/share/icons/hicolor/128x128/apps/${_pkgname}.png"
  for dir in data docs libs outputsheets plugins preview system; do
    cp -a ${pkgname}/$dir ${pkgdir}/usr/share/java/${_pkgname}/
  done
}
