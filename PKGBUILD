# Maintainer: Asterios Dimitriou <asterios@pci.gr>
# based on lxd package https://aur.archlinux.org/packages/lxd/
# Contributor: Maikel Wever <maikelwever@gmail.com>
# Contributor: Benjamin Asbach <archlinux-aur.lxd@impl.it>

pkgname=lxd-git
_pkgname=lxd
pkgver=3.14.r151.4f54c17ea
pkgrel=2
pkgdesc="Daemon based on liblxc offering a REST API to manage containers"
arch=('x86_64')
url="https://github.com/lxc/lxd"
license=('APACHE')
conflicts=('lxd' 'lxd-lts')
provides=('lxd')
depends=('lxc' 'squashfs-tools' 'dnsmasq' 'libuv')
makedepends=('go' 'git' 'tcl' 'patchelf')
optdepends=('lvm2: for lvm2 support'
            'thin-provisioning-tools: for thin provisioning support'
            'btrfs-progs: for btrfs storage driver support'
            'ceph: for ceph storage driver support'
            'jq: needed by empty-lxd.sh script'
)
options=('!strip' '!emptydirs')
source=("git+https://github.com/lxc/lxd.git"
        "lxd.service"
        "lxd.socket"
)
md5sums=('SKIP'
         'ad8ad313898fac0487fcf9a3b9b926ea'
         '1fb28d8dfe82af71d0675c8e9a0a7293'
)

_lxd=github.com/lxc/lxd

prepare() {
  mkdir -p "${srcdir}/go/src/github.com/lxc"
  ln -rTsf "${_pkgname}" "${srcdir}/go/src/${_lxd}"
}

pkgver() {
  cd "${srcdir}/go/src/${_lxd}"
  printf "%s" "$(git describe --long | sed 's/^lxd-//;s/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() { 
  export GOPATH="${srcdir}/go"
  cd "${GOPATH}/src/${_lxd}"
  make deps
  export CGO_CFLAGS="-I${GOPATH}/deps/sqlite/ -I${GOPATH}/deps/libco/ -I${GOPATH}/deps/raft/include/ -I${GOPATH}/deps/dqlite/include/"
  export CGO_LDFLAGS="-L${GOPATH}/deps/sqlite/.libs/ -L${GOPATH}/deps/libco/ -L${GOPATH}/deps/raft/.libs -L${GOPATH}/deps/dqlite/.libs/"
  export LD_LIBRARY_PATH="${GOPATH}/deps/sqlite/.libs/:${GOPATH}/deps/libco/:${GOPATH}/deps/raft/.libs/:${GOPATH}/deps/dqlite/.libs/"
  make
}

package() {
  go_bin_dir="${srcdir}/go/bin"
  go_deps_dir="${srcdir}/go/deps"
  install=lxd.install
  mkdir -p "${pkgdir}/usr/bin"
  mkdir -p "${pkgdir}/usr/lib/lxd"
  mkdir -p "${pkgdir}/usr/share/doc/lxd"
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions"
  install -p -m755 "${go_bin_dir}/"* "${pkgdir}/usr/bin"
  patchelf --set-rpath "/usr/lib/lxd" "${pkgdir}/usr/bin/lxd"
  cp --no-dereference --preserve=timestamps \
    "${go_deps_dir}/sqlite/.libs/"libsqlite3.so* \
    "${go_deps_dir}/libco/"libco.so* \
    "${go_deps_dir}/raft/.libs/"libraft.so* \
    "${go_deps_dir}/dqlite/.libs/"libdqlite.so* \
    "${pkgdir}/usr/lib/lxd"
  patchelf --set-rpath "/usr/lib/lxd" "${pkgdir}/usr/lib/lxd/libdqlite.so"

  # Package license
  install -Dm644 "${srcdir}/go/src/${_lxd}/COPYING"  "${pkgdir}/usr/share/licenses/${_pkgname}/LICENCE"

  # systemd files
  install -D -m644 "${srcdir}/lxd.service" \
    "${pkgdir}/usr/lib/systemd/system/lxd.service"
  install -D -m644 "${srcdir}/lxd.socket" \
    "${pkgdir}/usr/lib/systemd/system/lxd.socket"

  # documentation
  install -D -m644 "${srcdir}/go/src/${_lxd}/doc/"* \
    "${pkgdir}/usr/share/doc/lxd/"

  # helper scripts
  install -p -m644 "${srcdir}/go/src/${_lxd}/scripts/bash/lxd-client" \
    "${pkgdir}/usr/share/bash-completion/completions/lxd"
  install -p -m755 "${srcdir}/go/src/${_lxd}/scripts/empty-lxd.sh" "${pkgdir}/usr/lib/lxd"
}

# vim:set ts=2 sw=2 et:
