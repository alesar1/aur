# Maintainer: JP-Ellis <josh@jpellis.me>

pkgname=madgraph
pkgver=2.6.3.2
_major=${pkgver%%.*}
_minor=${pkgver#2.}
_minor=${_minor%%.*}
_dirname="MG5_aMC_v${pkgver//./_}"
pkgrel=1
pkgdesc="MadGraph5_aMC@NLO is a framework that aims at providing all the elements necessary for SM and BSM phenomenology"
url="https://launchpad.net/mg5amcnlo"
arch=('i686' 'x86_64')
license=('MIT')
depends=(
    'bash'
    'gcc-fortran'
    'perl'
    'python2'
    'tcsh'
)
optdepends=(
    'delphes'
    'fastjet'
    'golem95'
    'hepmc'
    'lhapdf'
    'madanalysis5'
    'madgraph-pythia-pgs'
    'madgraph-pythia8-interface'
)
source=("https://launchpad.net/mg5amcnlo/${_major}.0/${_major}.${_minor}.x/+download/MG5_aMC_v${pkgver}.tar.gz"
        "python2.patch"
        "gcc8.patch"
        "mg5_configuration.patch")
sha256sums=('834c9bcb98e21c214d5287f0dab65a982914a5c388173bcedd32d0d25c739f50'
            'f1f90b0b470b2ea97e4c9ad2f9c15085d4ef6479c1a94ceb71a8078ec79ff1b8'
            '3031fff92bcb616e2d53ef206341355e63130ccc9e23f77ce8d1baf98fdb90db'
            'a251d1bc6be29032c051cde8b0d050330b4777ff94fea6df5a495a9506c4eadc')
options=("!strip")

prepare() {
    msg2 "Fixing python references for python2"
    patch -p 1 -d $_dirname < python2.patch

    msg2 "Patching for GCC 8"
    patch -p 1 -d $_dirname < gcc8.patch

    msg2 "Extracting documentation"
    cd "${srcdir}/${_dirname}"
    tar xf doc.tgz
    rm doc.tgz

    msg2 "Removing VCS directories"
    find "${srcdir}/${_dirname}" -name "CVS" \
         -o -name ".svn" \
         -o -name ".bzr" -o -name ".bzrignore" \
         -o -name ".git" -o -name ".gitignore" \
         -o -name ".hg" -o -name ".hgignore" | xargs rm -rf
}

build() {
    msg2 "Compiling python source files"
    python2 -O -m compileall -qf "${srcdir}/${_dirname}" 2>&1 1>/dev/null || true

    msg2 "Initialize MG5 first run"
    # MadGraph needs to generate `Template/LO/Source/make_opts` which is done
    # automatically at startup.  This needs to be done during setup (or with
    # root access)
    tmpfile=$(mktemp)
    echo "exit" > $tmpfile
    "${srcdir}/${_dirname}/bin/mg5_aMC" $tmpfile 1>/dev/null
    rm $tmpfile

    msg2 "Updating configuration file"
    patch -p 1 -d $_dirname < mg5_configuration.patch
}

package() {
    msg2 "Installing files"

    # Copy everything of /opt/madgraph since the program isn't nicely
    # separated into bin, include, etc.
    mkdir -p "${pkgdir}/opt/${pkgname}"
    cp -a "${srcdir}/${_dirname}/." "${pkgdir}/opt/${pkgname}"
    install -Dm655 "${srcdir}/${_dirname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    # Create symbolic links in /usr/bin to mg5 and mg5_aMC
    mkdir -p "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/bin/mg5" "${pkgdir}/usr/bin/"
    ln -s "/opt/${pkgname}/bin/mg5_aMC" "${pkgdir}/usr/bin/"

    # For some reason, a lot of files have executable flags.  Change them back
    # to non-executable (except for actual executables)
    find "${pkgdir}/opt/${pkgname}" -type f -print0 | xargs -0 chmod 644
    find "${pkgdir}/opt/${pkgname}" -type f -path "*/bin/*" -print0 | xargs -0 chmod 755
    chmod 755 "${pkgdir}/opt/${pkgname}/MadSpin/madspin"

    echo ""
    echo "If you use MadGraph, please cite:"
    echo "-----------------------------------------------------------------"
    echo "Alwall, J., et al. \"The automated computation of tree-level and"
    echo "next-to-leading order differential cross sections, and their"
    echo "matching to parton shower simulations.\" Journal of High Energy"
    echo "Physics 2014.7 (2014): 1-157."
    echo "-----------------------------------------------------------------"
    echo ""
}

# Local Variables:
# mode: sh
# End:
