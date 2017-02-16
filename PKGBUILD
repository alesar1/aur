# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Kurnevsky Evgeny <kurnevsky@gmail.com>
# Contributor: Victor Dmitriyev <mrvvitek@gmail.com>

pkgname=scilab
pkgver=6.0.0
pkgrel=1
pkgdesc='A scientific software package for numerical computations.'
arch=('i686' 'x86_64')
url='https://www.scilab.org'
license=('BSD' 'custom:CeCILL')
depends=('suitesparse>=4.4.1'  'arpack' 'fftw' 'eigen'
         'hdf5'
         'libmatio' 'tk' 'curl'
         'java-runtime>=8'
         'beanshell' 'eclipse-ecj' 'java-flexdock>=1.2.4' 'fop-hyph'
         'jeuclid-core' 'jgraphx>=2.0.0.1' 'javahelp2'
         'saxon-he' 'jlatexmath-fop>=1.0.3' 'jrosetta>=1.0.4' 'jgoodies-looks' 'java-qdox'
         'java-skinlf' 'java-testng' 'xalan-java' 'docbook-xsl'
         'jogl>=2.3.2' 'apache-lucene>=6'
         'java-batik>=1.8' 'java-xmlgraphics-commons>=2.0')
makedepends=('java-environment>=8' 'apache-ant' 'ocaml' 'gcc-fortran' )
source=("${url}/download/${pkgver}/${pkgname}-${pkgver}-src.tar.gz"
        "${pkgname}-jogl-2.3.2.patch"
        "${pkgname}-LD_LIBRARY_PATH.patch"
        "${pkgname}-strict-jar.patch"
        "${pkgname}-lucene-6.patch"
        "${pkgname}-hdf5-type.patch"
        "${pkgname}-hdf5-1.8.10.patch")
sha256sums=('b71bde8e397173a713493159a5b559de2e049b493985663418c79b2de0f23137'
            'f19f173e989f72bd55bda35e271b3c180ecef4e29da964df3f230fce8b1330fc'
            '37f649fea0196b255e5a8576dd1e8c5fd219c6e8c600b703b35303fb90b6a7e0'
            '38aa094951338fa1d267dc6f397552e175213b0f8ba7b35727c178607861f6dd'
            'ba7969fff7f839562120534222fbb6421e204f6a382654d80bbab19e0c7a2c66'
            'c992a4f230dac60c3e217efee04b678c58d856f2aafa6173f742d4c5b050ab9d'
            '2dee1346c240d09ce7870bbbeb3318e0ac5d78f249d855df313e9cb7a2ef7fc0')

prepare(){
  cd "${srcdir}/${pkgname}-${pkgver}"

  # http://bugzilla.scilab.org/show_bug.cgi?id=14539
  patch -p1 < "${srcdir}"/${pkgname}-hdf5-1.8.10.patch
  # https://codereview.scilab.org/#/c/17530/
  patch -p2 < "${srcdir}"/${pkgname}-jogl-2.3.2.patch
  # Linked to: https://codereview.scilab.org/#/c/18089/
  patch < "${srcdir}"/${pkgname}-strict-jar.patch
  # Fix to build with lucene >= 6
  patch -p0 < "${srcdir}"/${pkgname}-lucene-6.patch
  # Fix hdf5 type
  patch -p0 < "${srcdir}"/${pkgname}-hdf5-type.patch
  # Fix for LD_LIBRARY_PATH
  patch bin/scilab "${srcdir}"/${pkgname}-LD_LIBRARY_PATH.patch
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  ./configure \
    --prefix=/usr \
    --with-gcc \
    --with-gfortran \
    --with-mpi \
    --with-matio \
    --with-umfpack \
    --with-fftw \
    --without-modelica \
    --without-emf \
    --with-install-help-xml \
    --enable-build-help \
    --enable-build-localization \
    --disable-static-system-lib

  make
  make doc
}

# For now, does not work
#check(){
  #cd "${srcdir}/${pkgname}-${pkgver}"

  #make check
#}

package(){
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install
  make DESTDIR="${pkgdir}" install-data install-html

  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/COPYING" \
    "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/COPYING-BSD" \
    "${pkgdir}/usr/share/licenses/${pkgname}/COPYING-BSD"
}
