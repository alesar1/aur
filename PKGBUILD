# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2018.2.0
_build=f1
_buildtag=20180709
_randomstring=db9a69dc5569
_prefix=/opt/UnityBeta
_unitydownloads="http://beta.unity3d.com/download/${_randomstring}"
#_keepdownloads=yes

pkgname=unity-editor-beta
pkgver=${_version}${_build}+${_buildtag}
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
optdepends=('unity-editor-beta-doc'
            'unity-editor-beta-standardassets'
            'unity-editor-beta-example'
            'unity-editor-beta-android'
            'unity-editor-beta-ios'
            'unity-editor-beta-mac'
            'unity-editor-beta-webgl'
            'unity-editor-beta-windows'
            'unity-editor-beta-facebook')
makedepends=('gtk2' 'libsoup' 'libarchive')
source=("${_unitydownloads}/UnitySetup-${_version}${_build}"
        'unity-editor-beta'
        'unity-editor-beta.desktop'
        'unity-editor-beta-icon.png')
sha1sums=('25f558636adc41bc8263dc4976fd9df86d1f9f6d'
          'd61175685d0836a79b2d4582c09ea23ed5ee18e9'
          'c348f141232ec06c6558fd42b5cbf86a75e2d02d'
          'fddf4861974f88f0565de7f54f7418204e729894')
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

unity-setup() {
  ./UnitySetup-${_version}${_build} \
    --download-location="${startdir}" \
    --install-location="${pkgdir}${_prefix}" \
    --unattended $@
}

extract-component() {
  msg2 "Extracting $1..."
  yes | unity-setup --components=$1 > "/tmp/$1.log"
}

prepare() {
  chmod +x "${srcdir}/UnitySetup-${_version}${_build}"
}

package() {
  msg2 "Extracting EULA..."
  echo n | unity-setup | head -n -2 > "${srcdir}/EULA"

  mkdir -p "${pkgdir}${_prefix}"
  extract-component Unity

  if [ -z "${_keepdownloads}" ]; then
    rm "${startdir}/Unity.tar.xz"
  fi

  # HACK: fixes WebGL builds by adding a symlink (python -> python2) to the PATH
  ln -s /usr/bin/python2 "${pkgdir}${_prefix}/Editor/python"

  # Fix permissions
  find "${pkgdir}${_prefix}/Editor/Data" -type d -exec chmod ga+rx {} \;

  # Add version to desktop file
  sed -i "/^Version=/c\Version=${_version}${_build}" "${srcdir}/unity-editor-beta.desktop"

  install -Dm644 -t "${pkgdir}/usr/share/applications" "${srcdir}/unity-editor-beta.desktop"
  install -Dm644 -t "${pkgdir}/usr/share/icons/hicolor/256x256/apps" "${srcdir}/unity-editor-beta-icon.png"
  install -Dm755 -t "${pkgdir}/usr/bin" "${srcdir}/unity-editor-beta"
  install -Dm644 "${srcdir}/EULA" "${pkgdir}/usr/share/licenses/${pkgname}/EULA"
}

