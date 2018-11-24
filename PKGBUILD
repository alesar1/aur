# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Kurnevsky Evgeny <kurnevsky@gmail.com>
# Contributor: Victor Dmitriyev <mrvvitek@gmail.com>

pkgname=scilab
pkgver=6.0.1
pkgrel=5
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
             'ocaml-findlib' 'ocaml-num' 'gcc-fortran')
source=("${url}/download/${pkgver}/${pkgname}-${pkgver}-src.tar.gz"
        "${pkgname}-jogl-2.3.2.patch"
        "${pkgname}-strict-jar.patch"
        "${pkgname}-lucene.patch"
        "${pkgname}-hdf5-type.patch"
        "${pkgname}-hdf5-1.8.10.patch"
        "${pkgname}-type.patch"
        "${pkgname}-num.patch"
        "${pkgname}-size-node.patch"
        "${pkgname}-LD_LIBRARY_PATH.patch"
        "${pkgname}-0004-Fix-build-with-ocaml-4.0.4.patch")
sha256sums=('e459dd5a918626567e3513ab106a68bee5a1085a8713020cba214e5d4c075a4f'
            'f19f173e989f72bd55bda35e271b3c180ecef4e29da964df3f230fce8b1330fc'
            '38aa094951338fa1d267dc6f397552e175213b0f8ba7b35727c178607861f6dd'
            'fb27339de4ddd55bf9bb172b0dbf22f67f578a3ca0270924792d728f42b43326'
            'c992a4f230dac60c3e217efee04b678c58d856f2aafa6173f742d4c5b050ab9d'
            '2dee1346c240d09ce7870bbbeb3318e0ac5d78f249d855df313e9cb7a2ef7fc0'
            '93597034c6866c3a4aaa7ef92b4588d2753383545ed3366be6cdb404edf949bd'
            '31e757bdb2086e08e2477118fceddcdd50f3c2fcad5c86cf5de8ec06009f34ed'
            '984dd6e01631e5b30bde8587e435770c948f887c60d3d353c2e703e6d8b1fe99'
            'a39277cb8cfc3d7929c73ce6d707dc24e3df4b8d8f2d587f075efebda79ff4db'
            '6712c6db2f3ba365d150e1feb1c71bf691f8aa3b45d5a872b05a42f0daf23392')

prepare(){
  cd "${srcdir}/${pkgname}-${pkgver}"

  # http://bugzilla.scilab.org/show_bug.cgi?id=14539
  patch -p1 < "${srcdir}"/${pkgname}-hdf5-1.8.10.patch
  # https://codereview.scilab.org/#/c/17530/
  patch -p2 < "${srcdir}"/${pkgname}-jogl-2.3.2.patch
  # Fix to build with lucene >= 7
  patch -p0 < "${srcdir}"/${pkgname}-lucene.patch
  # Linked to: https://codereview.scilab.org/#/c/18089/
  patch < "${srcdir}"/${pkgname}-strict-jar.patch
  # Fix hdf5 type
  patch -p0 < "${srcdir}"/${pkgname}-hdf5-type.patch
  # Fix type
  patch -p0 < "${srcdir}"/${pkgname}-type.patch
  # Size of node
  patch -p0 < "${srcdir}"/${pkgname}-size-node.patch
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
