# Maintainer: Det <nimetonmaili g-mail>
# Contributors: Ng Oon-Ee, Dan Vratil, Jeremy Sands, Erik Hardesty, josephgbr
# Based on [multilib]'s lib32-nvidia-utils: https://www.archlinux.org/packages/multilib/x86_64/lib32-nvidia-utils/

pkgname=('lib32-nvidia-utils-beta' 'lib32-nvidia-libgl-beta' 'lib32-opencl-nvidia-beta')
pkgver=352.30
pkgrel=1
arch=('x86_64')
url="http://www.nvidia.com/"
license=('custom:NVIDIA')
makedepends=('pacman>=4.2.0')
options=('!strip')
_pkg="NVIDIA-Linux-x86-$pkgver"
source_x86_64=("http://us.download.nvidia.com/XFree86/Linux-x86/$pkgver/$_pkg.run")
md5sums_x86_64=('7e59d84eafe2482b2f02df692b9168d5')

_create_links() {
  # create missing soname links
  for _lib in $(find "$pkgdir" -name '*.so*' | grep -v 'xorg/'); do
    # Get soname/base name
    _soname=$(dirname "$_lib")/$(readelf -d "$_lib" | grep -Po 'SONAME.*: \[\K[^]]*' || true)
    _base=$(echo "$_soname" | sed -r 's/(.*).so.*/\1.so/')

    # Create missing links
    [[ -e $_soname ]] || ln -s $(basename "$_lib") "$_soname"
    [[ -e $_base ]] || ln -s $(basename "$_soname") "$_base"
  done
}

prepare() {
  # Remove previous builds
  if [[ -d $_pkg ]]; then
    rm -rf $_pkg
  fi

  # Extract
  msg2 "Self-Extracting $_pkg.run..."
  sh $_pkg.run -x
}

package_lib32-opencl-nvidia-beta() {
  pkgdesc="OpenCL implemention for NVIDIA (32-bit, beta)"
  depends=('lib32-libcl' 'lib32-zlib' 'lib32-gcc-libs')
  optdepends=('opencl-headers: headers necessary for OpenCL development')
  provides=('lib32-opencl-nvidia')
  conflicts=('lib32-opencl-nvidia')
  cd $_pkg

  # OpenCL
  install -Dm755 libnvidia-compiler.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-compiler.so.$pkgver
  install -Dm755 libnvidia-opencl.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-opencl.so.$pkgver

  # create missing soname links
  _create_links

  # License (link)
  install -d "$pkgdir"/usr/share/licenses/
  ln -s nvidia-utils/ "$pkgdir"/usr/share/licenses/lib32-opencl-nvidia
}

package_lib32-nvidia-libgl-beta() {
  pkgdesc="NVIDIA library symlinks (32-bit, beta)"
  depends=('lib32-nvidia-utils-beta')
  provides=('lib32-libgl' 'lib32-nvidia-libgl')
  conflicts=('lib32-libgl' 'lib32-nvidia-libgl' 'lib32-mesa<10.1.0-2')
  cd $_pkg

  # OpenGL (link)
  install -d "$pkgdir"/usr/lib32/
  ln -s /usr/lib32/nvidia/libGL.so.$pkgver "$pkgdir"/usr/lib32/libGL.so.$pkgver
  ln -s libGL.so.$pkgver "$pkgdir"/usr/lib32/libGL.so.1
  ln -s libGL.so.$pkgver "$pkgdir"/usr/lib32/libGL.so

  # EGL (link)
  ln -s /usr/lib32/nvidia/libEGL.so.$pkgver "$pkgdir"/usr/lib32/libEGL.so.$pkgver
  ln -s libEGL.so.$pkgver "$pkgdir"/usr/lib32/libEGL.so.1
  ln -s libEGL.so.$pkgver "$pkgdir"/usr/lib32/libEGL.so

  # OpenGL ES 1 (link)
  ln -s /usr/lib32/nvidia/libGLESv1_CM.so.$pkgver "$pkgdir"/usr/lib32/libGLESv1_CM.so.$pkgver
  ln -s libGLESv1_CM.so.$pkgver "$pkgdir"/usr/lib32/libGLESv1_CM.so.1
  ln -s libGLESv1_CM.so.$pkgver "$pkgdir"/usr/lib32/libGLESv1_CM.so

  # OpenGL ES 2 (link)
  ln -s /usr/lib32/nvidia/libGLESv2.so.$pkgver "$pkgdir"/usr/lib32/libGLESv2.so.$pkgver
  ln -s libGLESv2.so.$pkgver "$pkgdir"/usr/lib32/libGLESv2.so.2
  ln -s libGLESv2.so.$pkgver "$pkgdir"/usr/lib32/libGLESv2.so

  # License (link)
  install -d "$pkgdir"/usr/share/licenses/
  ln -s nvidia-utils/ "$pkgdir"/usr/share/licenses/lib32-nvidia-libgl
}

package_lib32-nvidia-utils-beta() {
  pkgdesc="NVIDIA libraries (32-bit, beta)"
  depends=('lib32-zlib' 'lib32-gcc-libs')
  optdepends=('lib32-opencl-nvidia-beta: OpenCL support')
  provides=("lib32-nvidia-utils=$pkgver")
  conflicts=('lib32-nvidia-utils')
  cd $_pkg

  # OpenGL
  install -Dm755 libGL.so.$pkgver "$pkgdir"/usr/lib32/nvidia/libGL.so.$pkgver
  install -Dm755 libnvidia-glcore.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-glcore.so.$pkgver

  # EGL
  install -Dm755 libEGL.so.$pkgver "$pkgdir"/usr/lib32/nvidia/libEGL.so.$pkgver
  install -Dm755 libnvidia-eglcore.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-eglcore.so.$pkgver

  # OpenGL ES
  install -Dm755 libGLESv1_CM.so.$pkgver "$pkgdir"/usr/lib32/nvidia/libGLESv1_CM.so.$pkgver
  install -Dm755 libGLESv2.so.$pkgver "$pkgdir"/usr/lib32/nvidia/libGLESv2.so.$pkgver
  install -Dm755 libnvidia-glsi.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-glsi.so.$pkgver

  # VDPAU (Video Decode and Presentation API for Unix)
  install -Dm755 libvdpau_nvidia.so.$pkgver "$pkgdir"/usr/lib32/vdpau/libvdpau_nvidia.so.$pkgver

  # GPU-accelerated video encoding
  install -Dm755 libnvidia-encode.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-encode.so.$pkgver

  # CUDA (Compute Unified Device Architecture)
  install -Dm755 libcuda.so.$pkgver "$pkgdir"/usr/lib32/libcuda.so.$pkgver
  install -Dm755 libnvcuvid.so.$pkgver "$pkgdir"/usr/lib32/libnvcuvid.so.$pkgver

  # TLS (Thread local storage) support for OpenGL libs
  install -Dm755 tls/libnvidia-tls.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-tls.so.$pkgver

  # GPU monitoring and management
  install -Dm755 libnvidia-ml.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-ml.so.$pkgver

  # Helper libs for approved partners' GRID remote apps
  install -Dm755 libnvidia-ifr.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-ifr.so.$pkgver
  install -Dm755 libnvidia-fbc.so.$pkgver "$pkgdir"/usr/lib32/libnvidia-fbc.so.$pkgver

  # create missing soname links
  _create_links

  # License (link)
  install -d "$pkgdir"/usr/share/licenses/
  ln -s nvidia-utils/ "$pkgdir"/usr/share/licenses/lib32-nvidia-utils
}