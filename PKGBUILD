# Maintainer: Attila Greguss <floyd0122[at]gmail[dot]com>

pkgbase=dotnet-core-2.1
pkgname=('dotnet-runtime-2.1' 'dotnet-sdk-2.1')
pkgver=2.1.17.sdk805
_runtimever=2.1.17
_sdkver=2.1.805
pkgrel=2
arch=('x86_64' 'armv7h' 'aarch64')
url='https://www.microsoft.com/net/core'
license=('MIT')
options=('staticlibs')
source_armv7h=('https://download.visualstudio.microsoft.com/download/pr/57666a6d-0c82-4431-b251-f70356a1b6f7/8190a9b4ff5e962eb4547955c88848c3/dotnet-sdk-2.1.805-linux-arm.tar.gz')
source_aarch64=('https://download.visualstudio.microsoft.com/download/pr/e9a7e3c5-2db0-4eb2-9dc4-cc7060d0ee81/1ed6a7621a066dd15a06d4bb4a894a29/dotnet-sdk-2.1.805-linux-arm64.tar.gz')
source_x86_64=('https://download.visualstudio.microsoft.com/download/pr/e730fe40-e2ea-42e5-a5d0-f86830d75849/571e5a2f4ebf9f8117878eeaad5cb19b/dotnet-sdk-2.1.805-linux-x64.tar.gz')
sha512sums_armv7h=('3690df6eeea6ce16986450d442e1881c42164250399f11fcc05ee539328b2fe0c54cacf08b1c9ee63dc38a468d19e4b4046ca08b430cc2ba47f8f03803caa7a6')
sha512sums_aarch64=('917e48c9f6a46afd8600db405b5eabe5a067d3579c4976e8ab4626a909188a53979e4cb3119f3203f751ba9d760f8e38bfd6b4759f0887cd8cb18fb1efb159ca')
sha512sums_x86_64=('ceceaf569060c313e9e1b519ad2bfda37bb11c4549689d01080bed84b8a1b64f4c8a35fce4622b2f951a7ccf574e7ea4552c076fa2ba302846d4e1c5ae5b3a0c')

# Versioning details for dependencies
# https://docs.microsoft.com/en-us/dotnet/core/versions/#versioning-details

package_dotnet-runtime-2.1() {
  pkgdesc='The .NET Core runtime version 2.1'
  depends=('dotnet-host' 'icu' 'krb5' 'libunwind' 'openssl' 'zlib'
           'libcurl.so')
  optdepends=('lttng-ust: CoreCLR tracing')
  provides=("dotnet-runtime-2.1" "dotnet-runtime=${pkgver}")
  conflicts=("dotnet-runtime-2.1" "dotnet-runtime=${pkgver}")

  install -dm 755 "${pkgdir}"/usr/share/{dotnet/shared,licenses}
  cp -dr --no-preserve='ownership' shared/Microsoft.NETCore.App "${pkgdir}"/usr/share/dotnet/shared/
  ln -s dotnet-host-2.1 "${pkgdir}"/usr/share/licenses/dotnet-runtime-2.1
}

package_dotnet-sdk-2.1() {
  pkgdesc='The .NET Core SDK version 2.1'
  depends=('dotnet-runtime-2.1' 'glibc')
  provides=("dotnet-sdk-2.1" "dotnet-sdk=${pkgver}")
  conflicts=("dotnet-sdk-2.1" "dotnet-sdk=${pkgver}")

  install -dm 755 "${pkgdir}"/usr/share/{dotnet,licenses}
  cp -dr --no-preserve='ownership' sdk "${pkgdir}"/usr/share/dotnet/
  ln -s dotnet-host-2.1 "${pkgdir}"/usr/share/licenses/dotnet-sdk-2.1
}
