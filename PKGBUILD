# Maintainer: bartus <aur@bartus.33mail.com>
pkgname=meshlab
pkgver=2016.12
pkgrel=2
pkgdesc="System for processing and editing of unstructured 3D models arising in 3D scanning (qt5 version)"
arch=('i686' 'x86_64')
url="http://www.meshlab.net"
provides=('meshlab')
license=('GPL2')
depends=('bzip2' 'muparser' 'levmar' 'lib3ds' 'desktop-file-utils' 'glu' 'mpir' 'openssl' 'qt5-base' 'qt5-declarative' 'qt5-script')
#also create openctm(aur) jhead-lib structuresynth-lib to handle last dep
install="${pkgname}.install"
source=("git+https://github.com/cnr-isti-vclab/meshlab.git#tag=v2016.12"
        "git+https://github.com/cnr-isti-vclab/vcglib.git#tag=v1.0.1"
        "plugin_dir.patch"
        "shaders_dir.patch"
        "external.patch"
        "3ds.patch"
        "levmar.patch"
        "muparser.patch"
        "bzip2.patch"
        "meshlabserver_GLU.patch"
        "cpp11_abs.patch"
        "fix_locale.patch"
        "mpir.patch"
        "rpath.patch"
        "meshlab.desktop")
md5sums=('SKIP'
         'SKIP'
         'f13d58ca07fa74b3d7c8f7f9d4ee6a93'
         '753dd4753081ddb428f4db8eaefe9009'
         '038494125d7bd422074fc5635c5579ca'
         'e51b027eb9d78b82de73c4724b3928cf'
         '1a53a92e12f74520b36e38d9a2311834'
         '64caafa96bef4208d641e889099eba26'
         '616b0dcf018f46a490867028d6ddc533'
         'ca962601b06fac1fb2b6bf0b408777ad'
         'c1cfb910d20db49ec195d9918036e3c3'
         '5b59b23cf66e42f8b3d3eabe466b3eaa'
         '5df295c21de5bac8d6073528823d975a'
         '78bf780b3353fe212a77eb91db6f6b6c'
         '18aed0a21276a22325bf8c32166fb110')

prepare() {
  cd "${srcdir}"

  # remove bundled headers and libraries
  rm -fr meshlab/src/external/{inc,lib}

  msg "truncate external lib"
  patch -Np0 -i external.patch
  msg "fix rpath"
  patch -Np0 -i rpath.patch
  msg "fix meshlab/src/plugins_experimental/io_TXT/ case sensitive path"
  mv meshlab/src/plugins_experimental/io_TXT/io_txt.pro meshlab/src/plugins_experimental/io_TXT/io_TXT.pro
  msg "fix meshalbserver missing -lGLU"
  patch -Np0 -i meshlabserver_GLU.patch
  msg "fix cpp11 abs()"
  patch -Np0 -i cpp11_abs.patch
  msg "fix decimal separator problem"
  patch -Np0 -i fix_locale.patch
  msg "using system mpir lib"
  patch -Np0 -i mpir.patch
  msg "using system bzip2 lib"
  patch -Np0 -i bzip2.patch
  msg "using system muparser lib"
  patch -Np0 -i muparser.patch
  msg "using system levmar lib"
  patch -Np0 -i levmar.patch
  msg "using system 3ds lib"
  patch -Np0 -i 3ds.patch
  msg "move plugins to /usr/lib/plugins"
  patch -Np0 -i plugin_dir.patch
  msg "move shaders to /usr/share/meshlab/shaders"
  patch -Np0 -i shaders_dir.patch
}

build() {
  cd "${srcdir}/meshlab/src"

  msg "build external libraries"
  cd external
  qmake external.pro -r 
  make

  msg "build meshlab"
  cd ..
  qmake meshlab_full.pro -r 
  make
}

package() {
  cd "${srcdir}/meshlab/src/distrib"

  # install meshlab
  install -d -m755 ${pkgdir}/usr/bin
  install -d -m755 ${pkgdir}/usr/lib/meshlab
  install -d -m755 ${pkgdir}/usr/share/meshlab
  install -t ${pkgdir}/usr/bin meshlab*
  install -t ${pkgdir}/usr/lib/meshlab libcommon*

  cp -a plugins  ${pkgdir}/usr/lib/meshlab
  cp -a shaders  ${pkgdir}/usr/share/meshlab
  cp -a textures ${pkgdir}/usr/share/meshlab
  cp -a sample   ${pkgdir}/usr/share/meshlab



  # install man pages
  install -d -m755 "${pkgdir}/usr/share/man/man1"
  install -m644 "${srcdir}/meshlab/docs/meshlab.1" "${pkgdir}"/usr/share/man/man1
  install -m644 "${srcdir}/meshlab/docs/meshlabserver.1" "${pkgdir}"/usr/share/man/man1

  # install icons
  install -d -m755 "${pkgdir}/usr/share/pixmaps"
  install -m644 "${srcdir}/meshlab/src/meshlab/images/eye_cropped.png" "${pkgdir}/usr/share/pixmaps/meshlab.png"

  # install desktop entry
  install -d -m755 "${pkgdir}/usr/share/applications"
  install -m644 "${srcdir}/meshlab.desktop" "${pkgdir}/usr/share/applications"
  sed -i "s#Version=.*#Version=$pkgver#" "${pkgdir}/usr/share/applications/meshlab.desktop"
}

# vim:set ts=2 sw=2 et:
