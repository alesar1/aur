# Maintainer: Det <nimetonmaili g-mail>
# Contributors: 458italia, Madek, Berseker, Syr
# Check the latest version with:
# curl -s https://dl.google.com/dl/earth/client/current/google-earth-stable_current_x86_64.rpm | head -c96 | strings | cut -d "-" -f4

# Attempt to fix crashes and blank Panoramio: "1" to enable.
# - http://forums.fedoraforum.org/showthread.php?p=1678303#post1678303
_attempt_fix=0

# Build an unstable 64-bit build: "1" to enable.
_64=0

pkgname=google-earth
pkgver=7.1.4.1529
pkgrel=1
pkgdesc="A 3D interface to view satellite images of Earth and other objects"
arch=('i686' 'x86_64')
url="https://www.google.com/earth/index.html"
license=('custom:earth')
# Bin32
depends=('desktop-file-utils' 'hicolor-icon-theme' 'ld-lsb>=3-5' 'lib32-fontconfig' 'lib32-glu'
         'lib32-libgl' 'lib32-libsm' 'lib32-libxrender' 'lib32-mesa' 'shared-mime-info' 'xdg-utils')
[[ $_attempt_fix = 1 ]] && depends+=('gcc-multilib' 'lib32-freeimage' 'lib32-libpng15' 'lib32-qt4')
optdepends=('lib32-catalyst-utils: For AMD Catalyst'
            'lib32-nvidia-utils: For the NVIDIA driver')
# Native 32/64-bit
_arch=i386
[[ $CARCH = x86_64 ]] && [[ $_64 = 1 ]] && _arch=amd64
if [[ $CARCH = i686 ]] || [[ $_arch = amd64 ]]; then
  depends=('desktop-file-utils' 'fontconfig' 'glu' 'hicolor-icon-theme' 'ld-lsb>=3-5'
           'libgl' 'libsm' 'libxrender' 'mesa' 'shared-mime-info' 'xdg-utils')
  [[ $_attempt_fix = 1 ]] && depends+=('freeimage' 'libpng15' 'qtwebkit')
  optdepends=('catalyst-utils: For AMD Catalyst'
              'nvidia-utils: For the NVIDIA driver')
fi
makedepends=('pacman>=4.2.0')
options=('!emptydirs')
install=$pkgname.install
source=("google-earth-stable_${pkgver}_${_arch}.deb::https://dl.google.com/earth/client/current/google-earth-stable_current_${_arch}.deb"
        'googleearth'
        'google-earth-mimetypes.xml'
        'baifaao.cpp')
md5sums=('b8847cb867bdb3ff892149f0fd68f036'
         'e84f5d51ea3545c131d1794f89f6464a'
         'e3c67b8d05c3de50535bd7e45eee728e'
         '598d579a1c3199c77850d86ba78f7b44')
[[ $_arch = amd64 ]] && md5sums[0]='7bbba9d4d64f2a9b38752e259d849bda'

_instdir=/opt/google/earth/free/

# Build() the baifaao.so
if [[ $_attempt_fix = 1 ]]; then
  # bin32?
  if [[ $CARCH = x86_64 ]] && [[ $_64 != 1 ]]; then
    _m32=-m32
  fi

  build() {
    gcc -I /usr/include/qt4/ $_m32 -O3 -fPIC --shared baifaao.cpp -o baifaao.so
  }
fi

package() {
  msg2 "Extracting the data.tar.lzma..."
  bsdtar -xf data.tar.lzma -C "$pkgdir/"

  msg2 "Moving stuff in place..."
  # The .desktop
  mv "$pkgdir"/$_instdir/google-earth.desktop "$pkgdir"/usr/share/applications/

  # Icons
  for i in 16 22 24 32 48 64 128 256; do
    install -Dm644 "$pkgdir"/$_instdir/product_logo_$i.png "$pkgdir"/usr/share/icons/hicolor/${i}x${i}/apps/google-earth.png
  done

  # The MIME package
  install -Dm644 google-earth-mimetypes.xml "$pkgdir"/usr/share/mime/packages/google-earth-mimetypes.xml

  # The license (too many different ones to do this in "source=()")
  install -d "$pkgdir"/usr/share/licenses/google-earth/
  curl -Ls ${url/i*}/license.html -o "$pkgdir"/usr/share/licenses/google-earth/license.html

  msg2 "Removing the Debian-intended cron job and duplicated images..."
  rm -r "$pkgdir"/etc/cron.daily/ "$pkgdir"/$_instdir/product_logo_*.png

  if [[ $_attempt_fix = 1 ]]; then
    msg2 "Attempting a fix on Panoramio and certain crashes..."
    # Install baifaao.so
    install -m755 baifaao.so "$pkgdir"/$_instdir/

    # Preload it
    install -m755 googleearth "$pkgdir"/$_instdir/

    # bin32?
    if [[ "$_m32" ]]; then
      sed -i "s,/usr/lib,/usr/lib32,g" "$pkgdir"/$_instdir/googleearth
    fi

    # Remove the old, bundled Qt libs
    rm "$pkgdir"/$_instdir/libQt*
  fi
}
