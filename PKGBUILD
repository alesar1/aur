# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/UnityLts

pkgname=unity-editor-lts-facebook
pkgver=2018.4.11f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the Facebook-Games platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-lts')
makedepends=('cpio')
source=("2018.4.11f1.4.11f1.pkg::https://download.unity3d.com/download_unity/7098af2f11ea/MacEditorTargetInstaller/UnitySetup-Facebook-Games-Support-for-Editor-2018.4.11f1.pkg")
md5sums=("4e7b7666c0957532bbd52d0720c84836")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}/${_prefix}/Editor/Data/PlaybackEngines/Facebook"
  install -d "${_dest}"
  cd "${_dest}"
  cat "${srcdir}/TargetSupport.pkg.tmp/Payload" | gzip -dc | cpio -i
}

