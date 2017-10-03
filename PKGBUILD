pkgname=openmodelica-dev-omedit
pkgver=1.13.0
pkgrel=1

pkgdesc="The Open Source Modelica Suite - OpenModelica Connection Editor"
arch=('i686' 'x86_64')
url="https://openmodelica.org"
license=('OSMC-PL')
groups=(openmodelica-dev)

_group=OpenModelica
_name=OMEdit
_tag=v${pkgver}-dev

depends=('openmodelica-dev-omc' 'openmodelica-dev-qwt' 'openmodelica-dev-omplot' 'java-environment' 'lpsolve' 'hdf5-openmpi' 'omniorb' 'openscenegraph' 'sundials' 'libatomic_ops' 'python' 'gtkglext' 'ruby' 'coin-or-ipopt' 'qjson' 'suitesparse' 'boost-libs' 'qt5-webkit' 'qt5-svg' 'qt5-tools')

makedepends=('fmilib' 'openmodelica-dev-qwt' 'openmodelica-dev-omplot' 'gcc-fortran' 'boost' 'clang' 'cmake' 'java-environment' 'antlr2' 'git' 'expat' 'ncurses' 'readline' 'opencl-headers' 'imagemagick')

provides=('openmodelica-omedit')
conflicts=('openmodelica' 'openmodelica-omedit' 'openmodelica-git')

source=(  "git+https://github.com/${_group}/${_name}.git#tag=${_tag}"
          'omedit.desktop')
sha1sums=('SKIP'
          '1f0b0978f4199fdd383caa2334dae33721d69c20')

prepare() {
  cd "$srcdir/$_name"
  git checkout "tags/${_tag}"
  sed -i "s,../,https://github.com/${_group}/,g" .gitmodules
  git submodule sync
  git submodule update --init --recursive
}

build() {
  cd "$srcdir/$_name"
  autoconf
  export CPPFLAGS="$CPPFLAGS -DH5_USE_18_API"
  ./configure --prefix=/usr/ --with-omniORB  --with-cppruntime --with-lapack='-llapack -lblas'
  make
}

package() {
  cd "$srcdir/$_name/build"
  mkdir -p ${pkgdir}/usr
  cp -r * ${pkgdir}/usr

  cd "$srcdir/$_name"
  mkdir -p "$srcdir/tmp"

  cp "OMEdit/OMEditGUI/Resources/icons/omedit.ico"                "$srcdir/tmp/omedit.ico"

	cd "$srcdir/tmp/"

	for icon in *.ico; do
	  base=$(basename "${icon}" ".ico")
	  convert "${icon}" "${base}.png"
	  for file in ${base}*.png; do
	    size=$(file $file | grep -Po "\d+ x \d+" | grep -Po "^\d+")
	    install -D -m644 "$file" "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps/${base}.png"
	  done
	done

	cd "$srcdir"

	for file in *.desktop; do
	  install -D -m644 "$file" "${pkgdir}/usr/share/applications/${file}"
	done
}
