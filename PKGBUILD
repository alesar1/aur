# Contributor: Matthew McGinn <mamcgi@gmail.com>
# Contributor: Felipe F. Tonello <eu@felipetonello.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# TODO: support Toast

pkgbase=bitbake
pkgname=(bitbake bitbake-vim)
pkgver=1.52.0
pkgrel=1
pkgdesc="Build tool executing tasks and managing metadata"
url="https://www.openembedded.org/wiki/Main_Page"
license=(GPL2)
arch=(any)
source=("https://git.openembedded.org/bitbake/snapshot/bitbake-${pkgver}.tar.gz"
        "ignore-TestHashEquivalenceTCPServer.patch")
sha256sums=('ec23630cff7da2fa6e686cd330cc50c834472433a3f1001bcb857c2f837519dd'
            '0347fc61bb5e1b25e62b698470aaecf411680088c7d5c88a8a0e59138b620a33')

#check() {
#    if ! git config --global --get user.name; then
#        unset_name=1
#        git config --global user.name "Bitbake Tester"
#    fi
#    if ! git config --global --get user.email; then
#        unset_email=1
#        git config --global user.email "test@bitbake.com"
#    fi
#    cd "${pkgbase}-${pkgver}"
#    patch -p0 < "${srcdir}/ignore-TestHashEquivalenceTCPServer.patch"
#    BB_SKIP_NETTESTS='yes' PYTHONPATH="${srcdir}/${pkgbase}-${pkgver}/lib" PATH="${PATH}:${srcdir}/${pkgbase}-${pkgver}/bin" python ./bin/bitbake-selftest --failfast -v
#    if [ "${unset_name}" -eq 1 ]; then
#        unset_name=1
#        git config --global --unset user.name
#    fi
#    if [ "${unset_email}" -eq 1 ]; then
#        unset_email=1
#        git config --global --unset user.email
#    fi
#}

package_bitbake() {
    depends=(python python-beautifulsoup4 python-ply python-codegen
             python-progressbar python-pyinotify python-simplediff
             cpio diffstat)
    install=bitbake.install

    _pythonver=$(python --version | awk '{print $2}' | awk -F. '{print $1"."$2}')
    cd "${pkgbase}-${pkgver}"

    find . -iname "*.log" -delete
    install -d "${pkgdir}/usr/bin"
    install bin/bitbake* "${pkgdir}/usr/bin"

    install -d "${pkgdir}/usr/lib/python${_pythonver}/site-packages"
    cp -Ra lib/bb "${pkgdir}/usr/lib/python${_pythonver}/site-packages"
    cp -Ra lib/prserv "${pkgdir}/usr/lib/python${_pythonver}/site-packages"
    cp -Ra lib/hashserv "${pkgdir}/usr/lib/python${_pythonver}/site-packages"
    cp -Ra lib/bb/pysh "${pkgdir}/usr/lib/python${_pythonver}/site-packages"

    install -d "${pkgdir}/usr/share/man/man1"
    install doc/bitbake.1 "${pkgdir}/usr/share/man/man1"
}

package_bitbake-vim() {
    cd "${pkgbase}-${pkgver}"

    install -d "${pkgdir}/usr/share"
    cp -Ra contrib/vim "${pkgdir}/usr/share"
}
