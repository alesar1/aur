pkgname=gimp-elsamuko-git
pkgver=r86.91162f8
pkgrel=1
pkgdesc='Varoius Gimp scripts and plugins made by elsamuko'
arch=('i686' 'x86_64')
url='https://github.com/elsamuko/gimp-elsamuko'
license=('GPL3')
depends=(gimp)
makedepends=(git)
conflicts=(gimp-elsamuko-plugins gimp-elsamuko-scripts)
source=("git+$url.git")
md5sums=(SKIP)

pkgver(){
  cd ${pkgname%-git}
  set -o pipefail
  git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
build(){
  cd ${srcdir}
  msg2 "Building get-curves plugin"
  pushd ${pkgname%-git}/plugins/elsamuko-get-curves
  gimptool --build elsamuko-get-curves.c
  popd

  msg2 "Building depthmap-cv plugin TODO"
  pushd ${pkgname%-git}/plugins/elsamuko-depthmap-cv
#   TODO:  ld: undefined reference to symbol '_ZTIPKc@@CXXABI_1.3'
#   ld: /usr/lib/libstdc++.so.6: error adding symbols: DSO missing from command line
  # export CFLAGS="-I/usr/include/opencv4"
  # gimptool --build elsamuko-depthmap-cv.cpp
  popd

  msg2 "Building saturation plugin"
  pushd ${pkgname%-git}/plugins/elsamuko-saturation
  gimptool --build elsamuko-saturation.c
  popd
}
package(){
  _base_dir="$pkgdir/usr/share/gimp/2.0"
  _scripts_dir="$_base_dir/scripts"
  _plugins_dir="$_base_dir/plug-ins"

  cd ${srcdir}/${pkgname%-git}
  msg2 "Installing scripts"
  install -dm755 "$_scripts_dir"
  for script in scripts/*; do
    install -Dm755 $script "$_base_dir/$script"
  done

  msg2 "Installing plugins"

  cd ${srcdir}
  install -dm755 "$_plugins_dir"
  pushd ${pkgname%-git}/plugins/elsamuko-get-curves
  install -Dm755 elsamuko-get-curves "$_plugins_dir/"
  popd

  # pushd ${pkgname%-git}/plugins/elsamuko-depthmap-cv
  # install -Dm755 elsamuko-depthmap-cv "$_plugins_dir/"
  # popd

  pushd ${pkgname%-git}/plugins/elsamuko-saturation
  install -Dm755 elsamuko-saturation "$_plugins_dir/"
  popd
}
