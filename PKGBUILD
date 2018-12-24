# Contributor: PedroHLC <root@pedrohlc.com>
# Contributor: Adrià Cereto i Massagué <ssorgatem at gmail.com>
# Contributor: Anna <morganamilo@gmail.com>

project=vk9
pkgbase=vk9-git
pkgname=('vk9-git' 'lib32-vk9-git')
pkgver=0.29.0.9.ga5d3536
pkgrel=1
pkgdesc='Direct3D 9 compatibility layer using Vulkan.'
arch=('x86_64')
url='https://github.com/disks86/VK9'
license=('zlib')
options=(!strip !buildflags staticlibs)
makedepends=('ninja' 'meson>=0.43' 'git' 'wine>=3.5' 'shaderc' 'util-linux' 'cmake'
		'mingw-w64-cmake' 'mingw-w64-boost' 'mingw-w64-vulkan-headers'
		'mingw-w64-eigen' 'mingw-w64-vulkan-loader' 'spirv-headers')
source=($project::'git+https://github.com/disks86/VK9.git')
sha256sums=('SKIP')


pkgver() {
  cd "$srcdir/$project"
  git describe --tags | sed s/"-"/"."/g
}

prepare(){
  mkdir -p "$srcdir/wine/VK9-build"

  cat > "$srcdir/fix-build.sh" << EOF
#!/usr/bin/env bash
sed -i'' -E 's/-isystem\/usr\/[^-]+-w64-mingw32\/include/-I\/usr\/include\/spirv\/unified1/g' build.ninja
EOF
  chmod +x "$srcdir/fix-build.sh"

  cd "$srcdir/$project"
  cat > dep64/boost.sh << EOF
#!/usr/bin/env bash
export BOOST_INCLUDEDIR=/usr/x86_64-w64-mingw32/include
export BOOST_LIBRARYDIR=$srcdir/boost64
EOF
  cat > dep32/boost.sh << EOF
#!/usr/bin/env bash
export BOOST_INCLUDEDIR=/usr/i686-w64-mingw32/include
export BOOST_LIBRARYDIR=$srcdir/boost32
EOF
  cat > dep64/eigen.pc << EOF
# Package Information for pkg-config

prefix=/usr/x86_64-w64-mingw32
exec_prefix=${prefix}
includedir=${prefix}/include

Name: Eigen3
Description: A C++ template library for linear algebra: vectors, matrices, and related algorithms
Version: 3.3.5
Cflags: -I${includedir}
EOF
  cat > dep32/eigen.pc << EOF
# Package Information for pkg-config

prefix=/usr/i686-w64-mingw32
exec_prefix=${prefix}
includedir=${prefix}/include

Name: Eigen3
Description: A C++ template library for linear algebra: vectors, matrices, and related algorithms
Version: 3.3.5
Cflags: -I${includedir}
EOF
  rm dep{32,64}/vulkan-1.pc

  sed -i'' -E 's/ninja install/..\/..\/fix-build.sh\nninja install/g' package-release.sh
  
  mkdir -p "$srcdir/boost"{32,64}
  cd "$srcdir/boost32"
  cp /usr/i686-w64-mingw32/lib/libboost*.a ./
  rename -- .a -mt.a ./libboost*

  cd "$srcdir/boost64"
  cp /usr/x86_64-w64-mingw32/lib/libboost*.a ./
  rename -- .a -mt.a ./libboost*
}

build() {
  cd "$srcdir/$project"
  export WINEPREFIX="$srcdir/wine/VK9-build"
  ./package-release.sh $pkgver '..' --no-package --keep-builddir
}

# TODO: Make it compatible with archlinux32 too
package_vk9-git() {
  conflicts=('vk9-bin' 'vk9')
  provides=('vk9')
  depends=('vulkan-icd-loader' 'wine')
  
  cd "$srcdir/$project-$pkgver"
  install -Dm644 'x64/d3d9.dll' "$pkgdir/usr/lib/d3d9.dll"
  install -Dm755 'setup_vk9' "$pkgdir/usr/bin/setup_vk9"
  install -Dm644 'setup_vk9-x86_64.verb' "$pkgdir/usr/share/vk9/setup_vk9.verb"
}

package_lib32-vk9-git() {
  pkgdesc+=" (32-bit)"
  conflicts=('lib32-vk9-bin' 'lib32-vk9')
  provides=('lib32-vk9')
  depends=('lib32-vulkan-icd-loader' 'wine')
  
  cd "$srcdir/$project-$pkgver"
  install -Dm644 'x32/d3d9.dll' "$pkgdir/usr/lib32/d3d9.dll"
  install -Dm755 'setup_vk9-32' "$pkgdir/usr/bin/setup_vk9-32"
  install -Dm644 'setup_vk9-i686.verb' "$pkgdir/usr/share/lib32-vk9/setup_vk9.verb"
}
