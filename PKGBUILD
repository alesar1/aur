# Maintainer: Yunhui Fu <yhfudev@gmail.com>

USE_DEV=1

pkgname=ns3-hg
pkgver=r60
pkgrel=1
pkgdesc='Discrete-event network simulator for Internet systems'
arch=( 'i686' 'x86_64' 'armv6' 'armv6h' 'arm7h' )
url='http://www.nsnam.org/'
license=('GPL')
depends=(
    'gsl' # GNU Scientific Library
    'libxml2' 'sqlite' 'boost' 'boost-libs'
    'doxygen'
    'graphviz' 'imagemagick' 'dia' 'qt4'
    'python2' 'python2-setuptools' 'python2-pydot' 'goocanvas' 'pygoocanvas' 'pygtk' 'python2-pygraphviz'
    'pygccxml'
    'openmpi' # MPI for HPC
    'flex' # for nsc
    )
makedepends=(
    'mercurial' 'bzr' 'git'
    'binutils'
    'fakeroot'
    'findutils'
    )
optdepends=(
    'tcpdump' 'wireshark-gtk'
    'gdb' 'valgrind'
    'texlive-bin'
    'python2-sphinx'
    'uncrustify' # utils/check-style.py style check program
    )
source=(
    #"https://www.nsnam.org/release/ns-allinone-${pkgver}.tar.bz2"
    "ns3-hg::hg+http://code.nsnam.org/ns-3-allinone"
    "ns3-openflow-hg::hg+http://code.nsnam.org/openflow"
    "ns3-click-git::git+https://github.com/kohler/click"
    "ns3-brite-hg::hg+http://code.nsnam.org/jpelkey3/BRITE"
    "ns3-nsc-hg::hg+https://secure.wand.net.nz/mercurial/nsc"
    "ns3-dev-hg::hg+http://code.nsnam.org/ns-3-dev"
    "ns3-netanim-hg::hg+http://code.nsnam.org/netanim"
    "ns3-bake-hg::hg+http://code.nsnam.org/bake"
    "pybindgen-git::git+https://github.com/gjcarneiro/pybindgen.git"
    )

pkgver_git() {
    cd "${srcdir}/${pkgname}"
    local ver="$(git show | grep commit | awk '{print $2}' )"
    #printf "r%s" "${ver//[[:alpha:]]}"
    echo ${ver:0:7}
}

pkgver_svn() {
    cd "${srcdir}/${pkgname}"
    local ver="$(svn info | grep Revision | awk '{print $2}' )"
    #printf "r%s" "${ver//[[:alpha:]]}"
    echo ${ver:0:7}
}

pkgver_hg() {
    cd "${srcdir}/${pkgname}"
    local ver="$(hg log | grep changeset | head -n 1 | awk '{print $2}' | awk -F: '{print $1}' )"
    printf "r%s" "${ver//[[:alpha:]]}"
}

pkgver() {
    pkgver_hg
}

prepare()
{
    if [ ! "${USE_DEV}" = "0" ]; then
        # setup: bake, netanim, pybindgen, and ns-3-dev
        cd "${srcdir}/${pkgname}"
    else
        # already include source for netanim, pybindgen, and ns3-xxx
        cd $srcdir/ns-allinone-$pkgver
    fi

    echo "Fix python(3) for ns3"
    grep -rl '/usr/bin/env python' . \
        | xargs sed -e 's|/usr/bin/env python$|/usr/bin/env python2|g' -i

    if [ ! "${USE_DEV}" = "0" ]; then
        echo "update the dev links ..."
        rm -f ns-3-dev
        rm -f netanim
        rm -f bake
        rm -f pybindgen
        ln -sf ../ns3-dev-hg/     ns-3-dev
        ln -sf ../ns3-netanim-hg/ netanim
        ln -sf ../ns3-bake-hg/    bake
        ln -sf ../pybindgen-git/  pybindgen
        echo "Update the .config file ..."
        ./download.py
    fi

    echo "compile openflow lib support ..."
    cd $srcdir/ns3-openflow-hg
    grep -rl '/usr/bin/env python' . \
        | xargs sed -e 's|/usr/bin/env python$|/usr/bin/env python2|g' -i
    echo "  waf configure ..."
    ./waf configure
    echo "  waf build ..."
    ./waf build

    NUM_CORE=$(cat /proc/cpuinfo | grep processor | wc -l | awk '{print $0 + 1;}')

    echo "compile click support ..."
    cd $srcdir/ns3-click-git
    #autoreconf -if
    ./configure --disable-linuxmodule --enable-nsclick --enable-wifi
    rm -rf bin
    make -j $NUM_CORE

    echo "compile BRITE ..."
    cd $srcdir/ns3-brite-hg
    make -j $NUM_CORE

    if [ 0 = 1 ]; then
    echo "compile Network Simulation Cradle (NSC) ..."
    cd $srcdir/ns3-nsc-hg
    grep -rl '/usr/bin/env python' . \
        | while read A; do sed -e 's|/usr/bin/env python$|/usr/bin/python2|g' -i $A; done
    sed -e "s|if not conf.CheckLib('fl') or not exe_exists('flex'):|if not conf.CheckLib('fl') and not exe_exists('flex'):|g" -i SConstruct
    #python2 scons.py
    SHLIBSUFFIX=.so ./scons.py
    fi
}

build()
{
    if [ ! "${USE_DEV}" = "0" ]; then
        cd "${srcdir}/${pkgname}"
    else
        cd $srcdir/ns-allinone-$pkgver
    fi

    echo "Build ns-3 with build.py ..."
    ./build.py \
        --build-options=--progress \
        --qmake-path=/usr/bin/qmake-qt4 \
        -- \
        -d release -o build-shared \
        --prefix=/usr \
        --libdir=/usr/lib \
        --with-python=/usr/bin/python2 \
        --progress \
        --enable-mpi \
        --enable-sudo \
        --with-nsclick=$srcdir/ns3-click-git \
        --with-openflow=$srcdir/ns3-openflow-hg \
        --with-brite=$srcdir/ns3-brite-hg \
        #--with-nsc=$srcdir/ns3-nsc-hg \
        #--enable-examples \
        #--enable-tests \
        #$(NULL)


    if [ ! "${USE_DEV}" = "0" ]; then
        cd "${srcdir}/${pkgname}/ns-3-dev"
    else
        cd $srcdir/ns-allinone-$pkgver/ns-$pkgver
    fi
    #./waf configure
    ./waf build
}

verify_build()
{
    if [ ! "${USE_DEV}" = "0" ]; then
        cd "${srcdir}/${pkgname}"
    else
        cd $srcdir/ns-allinone-$pkgver
    fi

    # openflow
    # https://www.nsnam.org/docs/release/3.13/models/html/openflow-switch.html
    ./waf --run openflow-switch
    ./waf --run "openflow-switch -v"

    # NS-3 Click Integration Support
    # https://www.nsnam.org/docs/models/html/click.html
    ./waf --run nsclick-simple-lan

    # brite
    # https://www.nsnam.org/wiki/BRITE_integration_with_ns-3
    ./waf --run 'brite-generic-example --verbose=1'

    # nsc
    # https://www.nsnam.org/docs/models/html/tcp.html?#network-simulation-cradle
    ./test.py -s ns3-tcp-interoperability
}

package()
{
    if [ ! "${USE_DEV}" = "0" ]; then
        cd "${srcdir}/${pkgname}/ns-3-dev"
    else
        cd $srcdir/ns-allinone-$pkgver/ns-$pkgver
    fi
    ./waf install --destdir=$pkgdir/
}

#sha1sums=('59a9a3cfd738c48e17253eb7ed2aaccfc1cc498d' 'SKIP' 'SKIP' 'SKIP')
md5sums=('SKIP' #c1580dbd9bd1f65b3453cd8956d36ae7
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP')

