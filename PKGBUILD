# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/UnityLts

pkgname=unity-editor-lts-ios
pkgver=2017.4.31f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the iOS platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-lts')
source=("2017.4.31f1.4.31f1.tar.xz::https://download.unity3d.com/download_unity/9c8dbc3421cb/LinuxEditorTargetInstaller/UnitySetup-iOS-Support-for-Editor-2017.4.31f1.tar.xz")
md5sums=("55d3691912ab577e30fe95b47acc6ae7")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}/Editor/Data/PlaybackEngines"
  install -d "${_dest}"
  mv "${srcdir}/Editor/Data/PlaybackEngines/iOSSupport" "${_dest}"
}

