# Submitter: chendaniely
#
# Maintainer: chendaniely <chendaniely@gmail.com>
# code adapted from: Meow < a.li.devtty at gmail dot com >
#
# Previous maintainer(s)
# Maintainer: pat-s <patrick.schratz@gmail.com>
#######################

pkgname=rstudio-desktop-daily-bin
pkgver=2022.02.0.preview.392
pkgver_url=2022.02.0-preview-392
pkgrel=1
pkgdesc="An integrated development environment (IDE) for R (binary version from RStudio official repository)"
arch=('x86_64')
license=('GPL')
url="http://www.rstudio.org/"
depends=('r' 'hicolor-icon-theme' 'libxcomposite' 'libxslt' 'shared-mime-info' 'libxrandr' 'openssl-1.0' 'postgresql-libs')
#makedepends=('patchelf')
optdepends=('pandoc: markdown support'
            'pandoc-citeproc: markdown support')
conflicts=('rstudio-desktop' 'rstudio-desktop-git' 'rstudio-desktop-bin')
provides=("rstudio-desktop-daily=${pkgver}")
options=(!strip)

sha256sums_x86_64=('64571acba0e4efe49e05984dc8bc308644f4e8a8cb2bb3354a245015a18c2218')
source_x86_64=("https://s3.amazonaws.com/rstudio-ide-build/desktop/bionic/amd64/rstudio-${pkgver_url}-amd64.deb")

package() {

	shopt -s extglob

  msg "Converting debian package..."

  ar x rstudio-${pkgver_url}-amd64.deb

  cd "$srcdir"
  tar Jxf data.tar.xz -C "$pkgdir"
  install -dm755 "$pkgdir/usr/bin"

  cd "$pkgdir/usr/lib/rstudio/bin/quarto/bin/"
  ln -sf /usr/bin/pandoc ./pandoc
  #ln -sf /usr/bin/pandoc-citeproc ./

  find "$pkgdir/usr" -type d -print0 | xargs -0 chmod 755
  find "$pkgdir/usr" -type f -name '*.so.*' -print0 | xargs -0 chmod 644

  cd "$pkgdir/usr/bin"
  echo '#!/bin/sh
export QT_DIR=/usr/lib/rstudio/bin
export QT_PLUGIN_PATH=$QT_DIR/plugins
export QT_QPA_PLATFORM_PLUGIN_PATH=$QT_PLUGIN_PATH/platforms
export KDEDIRS=/usr
exec /usr/lib/rstudio/bin/rstudio "$@"
' > "$pkgdir/usr/bin/rstudio-daily-bin"
  chmod 755 "$pkgdir/usr/bin/rstudio-daily-bin"

  sed -i 's|/usr/lib/rstudio/bin/rstudio|/usr/bin/rstudio-daily-bin|' "$pkgdir/usr/share/applications/rstudio.desktop"
}
