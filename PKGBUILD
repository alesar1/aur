# Maintainer: Chris Billington <chrisjbillington@gmail.com>
_pkgname=linux-lts
_pkgver=5.4.79
_pkgrel=1
pkgbase="${_pkgname}-versioned-bin"
KERNNAME="${_pkgver}-${_pkgrel}-lts"
_versioned_pkgname="linux${_pkgver}-${_pkgrel}-lts"
pkgname=("${_pkgname}-versioned-bin"
         "${_pkgname}-versioned-headers-bin"
         "${_pkgname}-versioned-docs-bin"
         "${_versioned_pkgname}-bin"
         "${_versioned_pkgname}-headers-bin"
         "${_versioned_pkgname}-docs-bin")
pkgver=${_pkgver}
pkgrel=${_pkgrel}
pkgdesc='Repackaging of the Arch kernel with a unique package name for each version'
url="https://www.kernel.org/"
arch=(x86_64)
license=(GPL2)
options=('!strip')

_kernpkg=${_pkgname}-${_pkgver}-${_pkgrel}-${arch}.pkg.tar.zst
_headerspkg=${_pkgname}-headers-${_pkgver}-${_pkgrel}-${arch}.pkg.tar.zst
_docspkg=${_pkgname}-docs-${_pkgver}-${_pkgrel}-${arch}.pkg.tar.zst

# See if the sources are available from our own mirror:
_kernsrc=$(pacman -Sp "${_pkgname}" 2> /dev/null) 
_headerssrc=$(pacman -Sp "${_pkgname}-headers" 2> /dev/null) 
_docssrc=$(pacman -Sp "${_pkgname}-docs" 2> /dev/null) 

# If not, then use the Arch Linux archive:
if [ "$(basename "${_kernsrc}" 2> /dev/null)" != "${_kernpkg}" ]; then
  _arch_archive=https://archive.archlinux.org/packages/.all
  _kernsrc=${_arch_archive}/${_kernpkg}
  _headerssrc=${_arch_archive}/${_headerspkg}
  _docssrc=${_arch_archive}/${_docspkg}
fi

source=("${_kernsrc}"
        "${_headerssrc}"
        "${_docssrc}")

sha256sums=('8f0acc973cd35c97fce788dbb3ad2e4e12f0a5da0398485e0318c7b8e9d7252b'
            'f43f8cc667c19906ec212ab7907130fb31b0727d02b7af42c1a6c7694355ebd7'
            '62e5efbc1a21c8907dd1e485126de937fb7ba8cafb4b97f1e2cdae19a3c6ffe9')

package_linux-lts-versioned-bin() {
    pkgdesc="Dummy package depending on ${_versioned_pkgname}-bin"  
    depends=("${_versioned_pkgname}-bin")
    optdepends=('grub-hook: to run grub-mkconfig when kernels are added/removed')
}

package_linux-lts-versioned-headers-bin() {
    pkgdesc="Dummy package depending on ${_versioned_pkgname}-headers-bin"  
    depends=("${_versioned_pkgname}-headers-bin")
}

package_linux-lts-versioned-docs-bin() {
    pkgdesc="Dummy package depending on ${_versioned_pkgname}-docs-bin"  
    depends=("${_versioned_pkgname}-docs-bin")
}

package_linux5.4.79-1-lts-bin() {
  pkgdesc="The Linux kernel and modules, version ${KERNNAME}"
  depends=(coreutils kmod initramfs)
  conflicts=("${_pkgname}")
  optdepends=('crda: to set the correct wireless channels of your country'
              'linux-firmware: firmware images needed for some devices')
  tar -xf "${_kernpkg}" -C "${pkgdir}"
  rm "${pkgdir}"/{.MTREE,.BUILDINFO,.PKGINFO}
  sed -ic "s/${_pkgname}/${KERNNAME}/" "${pkgdir}/usr/lib/modules/${KERNNAME}/pkgbase"
}

package_linux5.4.79-1-lts-headers-bin() {
  pkgdesc="Headers and scripts for building modules for the Linux kernel ${KERNNAME}"
  conflicts=("${_pkgname}-headers")
  tar -xf "${_headerspkg}" -C "${pkgdir}"
  rm "${pkgdir}"/{.MTREE,.BUILDINFO,.PKGINFO}
  mv "${pkgdir}/usr/src/"{"${_pkgname}","${_versioned_pkgname}"}
}

package_linux5.4.79-1-lts-docs-bin() {
  pkgdesc="Documentation for the Linux kernel ${KERNNAME}"
  conflicts=("${_pkgname}-docs")
  tar -xf "${_docspkg}" -C "${pkgdir}"
  rm "${pkgdir}"/{.MTREE,.BUILDINFO,.PKGINFO}
  mv "${pkgdir}/usr/share/doc/"{"${_pkgname}","${_versioned_pkgname}"}
}
