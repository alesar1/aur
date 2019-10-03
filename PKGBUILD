# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/Unity

pkgname=unity-editor-ios
pkgver=2019.2.7f2
pkgrel=1
pkgdesc="Allows building your Unity projects for the iOS platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor')
source=("2019.2.7f2.2.7f2.tar.xz::https://download.unity3d.com/download_unity/c96f78eb5904/LinuxEditorTargetInstaller/UnitySetup-iOS-Support-for-Editor-2019.2.7f2.tar.xz")
md5sums=("3d344fe1a26c165dcc15012eee7e7ecd")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}/Editor/Data/PlaybackEngines"
  install -d "${_dest}"
  mv "${srcdir}/Editor/Data/PlaybackEngines/iOSSupport" "${_dest}"
}

