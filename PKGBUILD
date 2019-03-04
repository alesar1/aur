# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Kurnevsky Evgeny <kurnevsky@gmail.com>
# Contributor: Victor Dmitriyev <mrvvitek@gmail.com>

pkgname=scilab
pkgver=6.0.2
pkgrel=1
pkgdesc='A scientific software package for numerical computations.'
arch=('i686' 'x86_64')
url='https://www.scilab.org'
license=('BSD' 'custom:CeCILL' 'GPL2')
depends=('suitesparse>=4.4.1' 'arpack' 'fftw' 'eigen'
         'hdf5' 'libmatio'
         'tk' 'bwidget'
         'curl' 'inetutils'
         'java-runtime>=8'
         'beanshell' 'eclipse-ecj' 'java-flexdock>=1.2.4' 'fop-hyph'
         'jeuclid-core' 'jgraphx>=2.0.0.1' 'javahelp2'
         'saxon-he' 'jlatexmath-fop>=1.0.3' 'jrosetta>=1.0.4' 'jgoodies-looks' 'java-qdox'
         'java-skinlf' 'java-testng' 'xalan-java' 'docbook-xsl'
         'jogl>=2.3.2' 'apache-lucene>=7'
         'java-batik>=1.8' 'java-xmlgraphics-commons>=2.0.1')
makedepends=('java-environment=8' 'ant>=1.9.0'
             'ocaml-findlib' 'ocaml-num' 'gcc-fortran'
             'time')
source=("${url}/download/${pkgver}/${pkgname}-${pkgver}-src.tar.gz"
        "${pkgname}-jogl-2.3.2.patch"
        "${pkgname}-lucene.patch"
        "${pkgname}-strict-jar.patch"
        "${pkgname}-LD_LIBRARY_PATH.patch"
        "${pkgname}-0004-Fix-build-with-ocaml-4.0.4.patch"
        "${pkgname}-num.patch")
sha256sums=('880f4b614143e9f43c41416304874875df6ebc1a1b0e4400e69384851f6216b0'
            'f19f173e989f72bd55bda35e271b3c180ecef4e29da964df3f230fce8b1330fc'
            'fb27339de4ddd55bf9bb172b0dbf22f67f578a3ca0270924792d728f42b43326'
            '38aa094951338fa1d267dc6f397552e175213b0f8ba7b35727c178607861f6dd'
            'a39277cb8cfc3d7929c73ce6d707dc24e3df4b8d8f2d587f075efebda79ff4db'
            '6712c6db2f3ba365d150e1feb1c71bf691f8aa3b45d5a872b05a42f0daf23392'
            '31e757bdb2086e08e2477118fceddcdd50f3c2fcad5c86cf5de8ec06009f34ed')

prepare(){
  cd "${srcdir}/${pkgname}-${pkgver}"

  # https://codereview.scilab.org/#/c/17530/
  patch -p2 < "${srcdir}"/${pkgname}-jogl-2.3.2.patch
  # Fix to build with lucene >= 7
  patch -p0 < "${srcdir}"/${pkgname}-lucene.patch
  # Linked to: https://codereview.scilab.org/#/c/18089/
  patch < "${srcdir}"/${pkgname}-strict-jar.patch
  # Fix path, to avoid the following error:
  # An error has been detected while loading /usr/share/scilab//modules/functions/.libs/libscifunctions.so: /usr/share/scilab//modules/functions/.libs/libscifunctions.so: cannot open shared object file: No such file or directory
  patch -p0 < "${srcdir}"/${pkgname}-LD_LIBRARY_PATH.patch
  # OCaml
  patch -p0 < "${srcdir}"/${pkgname}-0004-Fix-build-with-ocaml-4.0.4.patch
  patch -p0 < "${srcdir}"/${pkgname}-num.patch
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
    --with-modelica \
    --without-emf \
    --with-install-help-xml \
    --enable-build-help \
    --enable-build-localization \
    --disable-static-system-lib

  make -j1
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
