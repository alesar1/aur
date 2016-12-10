pkgname=armsimsharp
pkgver=2.1
pkgrel=0
pkgdesc='A desktop application for simulating the execution of ARM assembly language programs.'
url="https://webhome.cs.uvic.ca/~nigelh/ARMSim-V${pkgver}/"
license=('GPL')
arch=('any')
depends=('arm-none-eabi-binutils' 'mono')
source=("${pkgname}" "${pkgname}.patch" "https://webhome.cs.uvic.ca/~nigelh/ARMSim-V${pkgver}/LinuxFiles/ARMSimLinuxFiles.zip")
sha256sums=('SKIP' 'SKIP' '53d7c46165b10ad8777fac8e5ee76ce4fca47ac1d606d5fa7fbfc09810527884')


prepare() {
    patch --quiet --strip=0 "--directory=${srcdir}" "--input=${srcdir}/${pkgname}.patch"
    ln --symbolic /usr/bin/arm-none-eabi-as "${srcdir}/arm-none-eabi-as"
}


package() {
    install -D --mode=u=rwx,go=rx "--target-directory=${pkgdir}/usr/bin" "${srcdir}/${pkgname}"
    install -D --mode=u=rw,go=r "--target-directory=${pkgdir}/opt/${pkgname}" "${srcdir}"/*.{config,dll,exe}
    cp --no-dereference "${srcdir}/arm-none-eabi-as" "${pkgdir}/opt/${pkgname}"
}
