# Maintainer: Joost Bremmer <toost dot b at gmail dot com>

pkgname=timew
pkgver=1.0.0.beta1
pkgrel=1
pkgdesc="Timewarrior is a command line time tracking application"
arch=('i866' 'x86_64')
url="http://taskwarrior.org/docs/timewarrior/"
license=('MIT')
makedepends=('cmake' 'gcc-libs')
optdepends=('task: Taskwarrior integration')
provides=('timew')
conficts=('timew-git')

install=timew.install
source=("http://taskwarrior.org/download/timew-${pkgver}.tar.gz"
        "on-modify-hook.timewarrior::https://git.tasktools.org/projects/TM/repos/timew/browse/ext/on-modify.timewarrior?at=aa00f436a1d9dea31ac26460af366bc5f8df943e&raw"
        "timew-refresh-python2.patch")
sha256sums=('07958e5382a53532ee62b969a047f26dc97269ca65e88b38d53842c4eb0170be'
            '77f2b98ad6e04a950cace3bbb9e0546bb8973100aa617c219a2cedb1fa8c3c3f'
            'be49866d0998c8a62245c843d3244883aba4256a878ab72e277aef4ca59b2885')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    patch -p1 -i "${srcdir}/timew-refresh-python2.patch"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    cmake -DCMAKE_BUILD_TYPE=release -DCMAKE_INSTALL_PREFIX=/usr .
    make
}


package() {
    cd "$srcdir/${pkgname}-${pkgver}"

    make DESTDIR=${pkgdir} VERBOSE=1 install
    install -Dvm644 "${srcdir}/on-modify-hook.timewarrior" \
        "${pkgdir}/usr/share/doc/timew/on-modify.timewarrior"

    chmod 755 "${pkgdir}/usr/share/doc/timew/doc/holidays/refresh"
    ln -sv "/usr/share/doc/timew/doc/holidays/refresh" "${pkgdir}/usr/bin/timew-refresh-holidays"
}
