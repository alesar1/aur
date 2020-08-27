# Maintainer: Sven-Hendrik Haase <svenstaro@gmail.com>
# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>

pkgbase=nvidia-settings-gtk2
pkgname=('nvidia-settings-gtk2' 'libxnvctrl')
pkgver=450.66
pkgrel=1
pkgdesc='Tool for configuring the NVIDIA graphics driver'
url='https://github.com/NVIDIA/nvidia-settings'
arch=('x86_64')
license=('GPL2')
makedepends=('git' 'inetutils' 'gtk2' 'jansson' 'gtk3' 'libxv' 'libvdpau' 'nvidia-utils' 'libxext' 'libxnvctl')
options=('staticlibs')
source=(${pkgbase}-${pkgver}.tar.gz::https://github.com/NVIDIA/nvidia-settings/archive/${pkgver}.tar.gz
        libxnvctrl_so.patch)
sha512sums=('2f01a7ac516e92f11e9dfe8f07a198f38bace4b9515824bdda3771b0482c6c540b03f614216814a74af2c35675ea5f8af7b62f74fa625cf628333d4636586bb1'
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
  make
  make -C src/libXNVCtrl
}

package_nvidia-settings-gtk2() {
  provides=(nvidia-settings)
  conflicts=(nvidia-settings)
  cd ${pkgbase}-${pkgver}
  make DESTDIR="${pkgdir}" install

  install -D -m644 doc/nvidia-settings.desktop "${pkgdir}/usr/share/applications/nvidia-settings.desktop"
  install -D -m644 doc/nvidia-settings.png "${pkgdir}/usr/share/pixmaps/nvidia-settings.png"
  sed -e 's:__UTILS_PATH__:/usr/bin:' -e 's:__PIXMAP_PATH__:/usr/share/pixmaps:' -i "${pkgdir}/usr/share/applications/nvidia-settings.desktop"

  rm "$pkgdir/usr/lib/libnvidia-gtk3.so.$pkgver"
}

package_libxnvctrl() {
  pkgdesc='NVIDIA NV-CONTROL X extension'
  provides=('libxnvctl' 'libXNVCtrl.so')

  cd ${pkgbase}-${pkgver}
  install -Dm 644 doc/{NV-CONTROL-API.txt,FRAMELOCK.txt} -t "${pkgdir}/usr/share/doc/${pkgname}"
  install -Dm 644 samples/{Makefile,README,*.c,*.h,*.mk} -t "${pkgdir}/usr/share/doc/${pkgname}/samples"

  cd src/libXNVCtrl
  install -Dm 644 ./*.h -t "${pkgdir}/usr/include/NVCtrl"
  install -d "${pkgdir}/usr/lib"
  cp -Pr out/libXNVCtrl.* -t "${pkgdir}/usr/lib"
}

# vim: ts=2 sw=2 et:
