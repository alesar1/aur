pkgname=spark2014-git
pkgver=0.3.draft.r19318.g3559419bef
pkgrel=1

pkgdesc='formally defined programming language based on ada (gnat fsf)'
url='https://www.spark-2014.org'
arch=('x86_64')
license=('GPL')

options=('!makeflags')

depends=('gprbuild' 'python2')
makedepends=('git' 'coq' 'gnatcoll-core' 'gprbuild' 'ocaml-num' 'ocaml-menhir'
             'ocaml-ocamlgraph' 'ocaml-zarith' 'ocaml-camlzip'
             'ocaml-ocplib-simplex' 'python-sphinx')
optdepends=('alt-ergo: alternative prover'
            'z3: alternative prover'
            'cvc4: alternative prover')

provides=('spark2014')
conflicts=('spark2014' 'why3')

# I could potentially use github's svn support to checkout only the gcc/ada
# directory instead of cloning the entire gcc tree.  The downside to this is
# that github will take awhile to generate the checkout.
# svn+https://github.com/gcc-mirror/gcc/trunk/gcc/ada
source=('git+https://github.com/AdaCore/spark2014#branch=fsf'
        'why3-adacore::git+https://github.com/AdaCore/why3'
        'git+https://github.com/gcc-mirror/gcc'
        'makefile-installdir-fixes.diff'
        'why3-menhirLib-fix.diff')


sha256sums=('SKIP' 'SKIP' 'SKIP'
            'fa399eab4d3acaf73158ebb5774c8b5d4421ef8a86a31bc8232bc0f16af8cf2f'
            '8bcf62beb5773a6da910a512d8384343774aa3561d6d5b5c1891e545aef635aa')

prepare() {
    cd spark2014
    git submodule init
    git config submodule.why3.url "$srcdir"/why3-adacore
    git submodule update why3
    cd why3 && git reset --hard && cd ..

    ln -sf "$srcdir"/gcc/gcc/ada gnat2why/gnat_src

    # Use install instead of mv to install the various targets while also
    # houring the INSTALLDIR convention used within this Makefile.
    patch -Np1 -i "$srcdir"/makefile-installdir-fixes.diff

    patch -Np1 -i "$srcdir"/why3-menhirLib-fix.diff

    # Arch Linux doesn't use libexec, everything lives under lib.
    sed -i 's/libexec/lib/g' gnatprove/configuration.ads
}

pkgver() {
    cd spark2014
    git describe --long --tags | sed 's/_/-/; s/\([^-]*-g\)/r\1/; s/-/./g'
}

build() {
    cd spark2014
    make setup INSTALLDIR="$pkgdir"/usr
    make
    make -C docs/lrm man
    make -C docs/ug man
}

check() {
    cd spark2014
    # XXX ImportError: No module named gnatpython.env
    # python2 testsuite/gnatprove/run-tests
    # python2 testsuite/gnatmerge/run-tests
}

package() {
    cd spark2014
    make INSTALLDIR="$pkgdir"/usr install-all install-examples

    install -Dm0755 install/bin/gnat2why "$pkgdir"/usr/bin/gnat2why
    install -Dm0755 install/bin/gnatprove "$pkgdir"/usr/bin/gnatprove
    install -Dm0755 install/bin/spark_codepeer_wrapper "$pkgdir"/usr/bin/spark_codepeer_wrapper
    install -Dm0755 install/bin/spark_memcached_wrapper "$pkgdir"/usr/bin/spark_memcached_wrapper
    install -Dm0755 install/bin/spark_report "$pkgdir"/usr/bin/spark_report

    # For some reason the spark install doesn't include the why3 drivers and
    # the other bits which gnatprove needs to function.
    # cp -a --no-preserve=ownership install/share/why3 "$pkgdir"/usr/share

    # Needed?
    # install -Dm0755 install/bin/why3cpulimit "$pkgdir"/usr/lib/spark/bin/why3cpulimit
    rm -f -- "$pkgdir"/usr/bin/target.atp

    install -Dm0644 docs/lrm/_build/man/spark2014refman.1 "$pkgdir"/usr/share/man/man7/spark2014_reference.7
    install -Dm0644 docs/ug/_build/man/spark2014usersguide.1 "$pkgdir"/usr/share/man/man7/spark2014_userguide.7
}
