# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/UnityLts

pkgname=unity-editor-lts-webgl
pkgver=2018.4.11f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-lts'
         'ffmpeg'
         'gzip')
source=("2018.4.11f1.4.11f1.tar.xz::https://download.unity3d.com/download_unity/7098af2f11ea/LinuxEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2018.4.11f1.tar.xz")
md5sums=("09c30e1e0970af9952568ff837b65f87")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}"
  install -d "${_dest}"
  mv Editor "${_dest}"
}

