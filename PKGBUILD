# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_prefix=/opt/UnityBeta

pkgname=unity-editor-beta
pkgver=2019.2.0b10
pkgrel=1
pkgdesc="The world's most popular development platform for creating 2D and 3D multiplatform games and interactive experiences."
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('desktop-file-utils'
         'xdg-utils'
         'gcc-libs'
         'lib32-gcc-libs'
         'gconf'
         'libgl'
         'glu'
         'nss'
         'libpng12'
         'libxtst'
         'libpqxx'
         'npm'
         'intel-tbb'
         'gtk3')
optdepends=("${pkgname}-doc"
            "${pkgname}-android"
            "${pkgname}-ios"
            "${pkgname}-mac"
            "${pkgname}-webgl"
            "${pkgname}-windows"
            "${pkgname}-facebook"
            "visual-studio-code-bin"
            "unityhub"
            "jq: needed for UnityHub integration helpers --register/--deregister")
install=${pkgname}.install
source=("2019.2.0b10.tar.xz::https://beta.unity3d.com/download/54f9b0ad4ba4/LinuxEditorInstaller/Unity.tar.xz"
        "${pkgname}"
        "${pkgname}.desktop"
        "${pkgname}-icon.png"
        "eula.txt")
md5sums=("ed274d698048226ac324f288d57c916e"
         'bac8a19031259cc585e602b115bae784'
         '03837b6962d1050bbaf29b76e0f257e3'
         '723f9e556821810682a6d1f4be540a74'
         '24f6741eba3d591a0761f3c92e3cc1f7')
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  install -d "${pkgdir}/${_prefix}"
  mv "${srcdir}/Editor" "${pkgdir}/${_prefix}"

  # HACK: fixes WebGL builds by adding a symlink (python -> python2) to the PATH
  ln -s /usr/bin/python2 "${pkgdir}${_prefix}/Editor/python"

  # Fix permissions
  find "${pkgdir}${_prefix}/Editor/Data" -type d -exec chmod ga+rx {} \;

  # Add version to desktop file
  sed -i "/^Version=/c\Version=${pkgver}" "${srcdir}/${pkgname}.desktop"

  # Add version/name to launch script
  sed -i "s/%PKGNAME%/${pkgname}/g" "${srcdir}/${pkgname}"
  sed -i "s/%PKGVER%/${pkgver}/g" "${srcdir}/${pkgname}"

  install -Dm644 -t "${pkgdir}/usr/share/applications" "${srcdir}/${pkgname}.desktop"
  install -Dm644 -t "${pkgdir}/usr/share/icons/hicolor/256x256/apps" "${srcdir}/${pkgname}-icon.png"
  install -Dm755 -t "${pkgdir}/usr/bin" "${srcdir}/${pkgname}"
  install -Dm644 "${srcdir}/eula.txt" "${pkgdir}/usr/share/licenses/${pkgname}/eula.txt"
}

