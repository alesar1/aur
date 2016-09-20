# Maintainer: Michael DeGuzis <mdeguzis@gmail.com>
# Generate new listing of cores: 
# pacaur -s libretro | sed 's/aur\///' | sed 'N;s/\n/ /' | awk '{print $1}'
# This package tracks the latest source code on GitHub
# Clone specific tags:

# Cloning specific tags:
#source=("git+https://github.com/libretro/RetroArch.git#tag=v${pkgver}"
#        'git+https://github.com/KhronosGroup/glslang.git#commit=a4a4d5e'
#        'git+https://github.com/KhronosGroup/SPIRV-Cross.git#commit=5c24d99')

pkgname=retroarch-git
pkgver=1.3.6.r1439.8095fa9
pkgrel=2
#epoch=1
_gitname=RetroArch
pkgdesc='Reference frontend for the libretro API (Git-latest)'
arch=('i686' 'x86_64')
conflicts=('retroarch')
provides=('retroarch')
url='http://www.libretro.com/'
license=('GPL')
groups=('libretro')
depends=('alsa-lib' 'gcc-libs' 'glibc' 'libdrm' 'libgl' 'libpulse' 'libusb'
         'libx11' 'libxcb' 'libxext' 'libxinerama' 'libxkbcommon' 'libxv'
         'libxxf86vm' 'mesa' 'openal' 'sdl2' 'wayland' 'zlib'
         'libass.so' 'libavcodec.so' 'libavformat.so' 'libavutil.so'
         'libfreetype.so' 'libswresample.so' 'libswscale.so' 'libudev.so'
	 'nvidia-cg-toolkit')
makedepends=('git' 'vulkan-icd-loader')
install=$pkgname.install
optdepends=('libretro-overlays-git: Collection of overlays'
	    'libretro-shaders-all-git: Collection of shaders'
	    'retroarch-assets-xmb: XMB menu assets'
	    'retroarch-autoconfig-udev-git: udev joypad autoconfig (git latest)'
	    'xdg-utils-git: Includes updated screensaver suspend fixes')
backup=('etc/retroarch.cfg')
source=('git+https://github.com/libretro/RetroArch.git'
        'git+https://github.com/KhronosGroup/glslang.git'
        'git+https://github.com/KhronosGroup/SPIRV-Cross.git'
	'default-paths.patch')
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
	    '68cca008fb0123d6f9b989a0dfd361f8de2a5c3dfe3670d0d04cb661bd9aea5c')

pkgver() {

  cd $_gitname
  printf "%s" "$(git describe --first-parent --long --tags | sed 's/v//g;s/\([^-]*-\)g/r\1/;s/-/./g')"

}

prepare() {

  cd $_gitname

  git submodule init deps/{glslang/glslang,SPIRV-Cross}
  git config submodule.glslang.url ../glslang
  git config submodule.SPIRV-Cross.url ../SPIRV-Cross
  git submodule update deps/{glslang/glslang,SPIRV-Cross}

}

build() {

  cd $_gitname

  # Patch retroarch.cfg for sane defaults (core path, core info, joypad autoconfig)
  msg2 "Patching retroarch.cfg for default paths"
  patch -p1 < $srcdir/default-paths.patch

  ./configure \
    --prefix='/usr' \
    --disable-jack \
    --disable-oss
  make
  make -C gfx/video_filters
  make -C audio/audio_filters

}

package() {

  cd RetroArch

  make DESTDIR="${pkgdir}" install

  install -dm 755 "${pkgdir}"/usr/lib/retroarch/filters/{audio,video}
  install -m 644 gfx/video_filters/*.{filt,so} "${pkgdir}"/usr/lib/retroarch/filters/video/
  install -m 644 audio/audio_filters/*.{dsp,so} "${pkgdir}"/usr/lib/retroarch/filters/audio/

}

# vim: ts=2 sw=2 et:
