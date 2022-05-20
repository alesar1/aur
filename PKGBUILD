# Contributor: Sven-Hendrik Haase <svenstaro@archlinux.org>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>

pkgbase=nvidia-510xx-settings
pkgname=('nvidia-510xx-settings' 'libxnvctrl-510xx')
pkgver=510.73.05
pkgrel=1
pkgdesc='Tool for configuring the NVIDIA graphics driver'
url='https://github.com/NVIDIA/nvidia-settings'
arch=('x86_64')
license=('GPL2')
makedepends=('inetutils' 'jansson' 'gtk2' 'gtk3' 'libxv' 'libvdpau' 'nvidia-510xx-utils' 'libxext')
options=('staticlibs')
source=(${pkgbase}-${pkgver}.tar.gz::https://github.com/NVIDIA/nvidia-settings/archive/${pkgver}.tar.gz
        libxnvctrl_so.patch)
sha512sums=('8b0a1c8ade2592e317318c1866b996b8f65d09c0349d97649a48fbc00c251f77551ae261d2acce508bee05fc410c5dabf0e57a92b27828a5aaff13151861a390'
            '91ff94736063b911c83b8876fe3e3778db82e0ffe0102036d81a3a6e872ca44a585914646fcbbbe399cd63aa17685fc7f73263ec4f4084f48768ca4d704037fa')

prepare() {
  export PREFIX=/usr
  export NV_USE_BUNDLED_LIBJANSSON=0
  export OUTPUTDIR=out
  cd ${pkgbase}-${pkgver}
  patch -p0 < "${srcdir}/libxnvctrl_so.patch"
}

build() {
  cd ${pkgbase}-${pkgver}
  export CFLAGS+=" -ffat-lto-objects"
  make
  make -C src/libXNVCtrl
}

package_nvidia-510xx-settings() {
  depends=('jansson' 'gtk3' 'libxv' 'libvdpau' 'nvidia-510xx-utils' 'libxnvctrl-510xx')
  provides=('nvidia-settings')
  conflicts=('nvidia-settings')

  cd ${pkgbase}-${pkgver}
  make DESTDIR="${pkgdir}" install

  install -D -m644 doc/nvidia-settings.desktop "${pkgdir}/usr/share/applications/nvidia-settings.desktop"
  install -D -m644 doc/nvidia-settings.png "${pkgdir}/usr/share/pixmaps/nvidia-settings.png"
  sed \
    -e 's:__UTILS_PATH__:/usr/bin:' \
    -e 's:__PIXMAP_PATH__:/usr/share/pixmaps:' \
    -e 's/__NVIDIA_SETTINGS_DESKTOP_CATEGORIES__/Settings;HardwareSettings;/' \
    -e 's/Icon=.*/Icon=nvidia-settings/' \
    -i "${pkgdir}/usr/share/applications/nvidia-settings.desktop"

  rm "$pkgdir/usr/lib/libnvidia-gtk2.so.$pkgver"
}

package_libxnvctrl-510xx() {
  depends=('libxext')
  pkgdesc='NVIDIA NV-CONTROL X extension'
  provides=('libxnvctrl' 'libXNVCtrl.so')
  conflicts=('libxnvctrl')

  cd ${pkgbase}-${pkgver}
  install -Dm 644 doc/{NV-CONTROL-API.txt,FRAMELOCK.txt} -t "${pkgdir}/usr/share/doc/${pkgname}"
  install -Dm 644 samples/{Makefile,README,*.c,*.h,*.mk} -t "${pkgdir}/usr/share/doc/${pkgname}/samples"

  cd src/libXNVCtrl
  install -Dm 644 ./*.h -t "${pkgdir}/usr/include/NVCtrl"
  install -d "${pkgdir}/usr/lib"
  cp -Pr out/libXNVCtrl.* -t "${pkgdir}/usr/lib"
}

# vim: ts=2 sw=2 et:
