# Maintainer: HRKo <ootaharuki99 at gmail.com>
pkgname=mathpix-snipping-tool
pkgver=00.00.0057
pkgrel=1
pkgdesc="Mathpix Snipping Tool"
arch=('x86_64')
url="https://snapcraft.io/mathpix-snipping-tool"
license=('unknown')
makedepends=('squashfs-tools')
depends=('qt5-x11extras' 'qt5-webkit')
source=('https://api.snapcraft.io/api/v1/snaps/download/jnlZEYdmdXGhh6oJTtMsawNGZzEWmMhk_19.snap')
md5sums=('bbafafe6622ee76da6de0eb336c955bd')

## run these to get the source URL and the version
# curl -H 'X-Ubuntu-Series: 16' https://api.snapcraft.io/api/v1/snaps/details/mathpix-snipping-tool | jq '.download_url' -r
# curl -H 'X-Ubuntu-Series: 16' https://api.snapcraft.io/api/v1/snaps/details/mathpix-snipping-tool | jq '.version' -r

prepare() {
  cd $srcdir
  unsquashfs -f jnlZEYdmdXGhh6oJTtMsawNGZzEWmMhk_19.snap /usr/bin/mathpix-snipping-tool \
                                                         /meta/gui/mathpix-snipping-tool.desktop \
                                                         /meta/gui/icon.svg
  sed 's|${SNAP}/meta/gui/icon.svg|mathpix-snipping-tool|g' -i squashfs-root/meta/gui/mathpix-snipping-tool.desktop
}

package() {
  cd $srcdir/squashfs-root
  install -Dm0644 meta/gui/mathpix-snipping-tool.desktop	$pkgdir/usr/share/applications/mathpix-snipping-tool.desktop
  install -Dm0644 meta/gui/icon.svg				$pkgdir/usr/share/icons/mathpix-snipping-tool.svg
  install -Dm0755 usr/bin/mathpix-snipping-tool			$pkgdir/usr/bin/mathpix-snipping-tool
}
