# Maintainer: rawkode <rawkode@pm.me>
# Maintainer: Benjamin Denhartog <ben@sudoforge.com>

_pkgname=pulumi
pkgname=pulumi-bin
pkgver=2.13.2
pkgrel=1
pkgdesc="Modern Infrastructure as Code"
arch=('x86_64')
license=('Apache-2.0')
url="https://github.com/pulumi/pulumi"
source=("https://get.pulumi.com/releases/sdk/${_pkgname}-v${pkgver}-linux-${CARCH/x86_64/x64}.tar.gz")
sha256sums=('db1b5d292d6b0a15fdd34dd3425e261aed156ebb6d1dc29a7d80b872b8a2755b')

package() {
  cd "${srcdir}/${_pkgname}"

  for f in \
    "$_pkgname" \
    "${_pkgname}-analyzer-policy" \
    "${_pkgname}-analyzer-policy-python" \
    "${_pkgname}-language-dotnet" \
    "${_pkgname}-language-go" \
    "${_pkgname}-language-nodejs" \
    "${_pkgname}-language-python" \
    "${_pkgname}-language-python-exec" \
    "${_pkgname}-resource-pulumi-nodejs" \
    "${_pkgname}-resource-pulumi-python" \
  ; do
    install -D -m 755 "$f" "${pkgdir}/usr/bin/${f}"
  done

  # Generate Bash completion
  mkdir -p "${pkgdir}/etc/bash_completion.d"
  "${pkgdir}/usr/bin/${_pkgname}" gen-completion bash |\
    install -m644 /dev/stdin "${pkgdir}/etc/bash_completion.d/${_pkgname}"

  # Generate ZSH completion
  mkdir -p "${pkgdir}/usr/local/share/zsh/site-functions"
  "${pkgdir}/usr/bin/${_pkgname}" gen-completion zsh |\
    install -m644 /dev/stdin "${pkgdir}/usr/local/share/zsh/site-functions/_${_pkgname}"
}
