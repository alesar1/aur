# Maintainer: Nitroretro <nitroretro@protonmail.com>

# Based on the `minecraft-server` AUR package by:
## Maintainer: Gordian Edenhofer <gordian.edenhofer@gmail.com>
## Contributor: Philip Abernethy <chais.z3r0@gmail.com>
## Contributor: sowieso <sowieso@dukun.de>

_ver="1.6.4_9.11.1.1345-5"
_minecraft_ver_latest="1.14.4"

IFS="-" read -ra _ver_temp <<< "$_ver"
IFS="_" read -ra _pkgver_temp <<< "${_ver_temp[0]}"
IFS="." read -ra _minecraft_ver_temp <<< "${_pkgver_temp[0]}"

_minecraft_ver=${_pkgver_temp[0]}
_minecraft_ver_major=${_minecraft_ver_temp[0]:-0}
_minecraft_ver_minor=${_minecraft_ver_temp[1]:-0}
_minecraft_ver_patch=${_minecraft_ver_temp[2]:-0}
_forge_ver=${_pkgver_temp[1]}

_pkgver=${_ver_temp[0]//_/-}

if [ "$_minecraft_ver" = "$_minecraft_ver_latest" ]; then
	pkgname="forge-server"
	_forge_name="forge"
else
	pkgname="forge-server-${_minecraft_ver}"
	_forge_name="forge-${_minecraft_ver}"
fi
pkgver=${_ver_temp[0]}
pkgrel=${_ver_temp[1]}
pkgdesc="Minecraft Forge server unit files, script and jar"
arch=("any")
url="https://minecraftforge.net"
license=("custom")
depends=("java-runtime-headless=8" "screen" "sudo" "bash" "awk" "sed")
optdepends=("tar: needed in order to create world backups"
	"netcat: required in order to suspend an idle server")
provides=("forge-server=${pkgver}")
backup=("etc/conf.d/${_forge_name}")
install="forge-server.install"
source=("forged-backup.service"
	"forged-backup.timer"
	"forged.service"
	"forged.conf"
	"forged.sh")
noextract=("forge-${_pkgver}.jar")
sha512sums=('9b862f6a0d81910185343ffd86a5a92aaf896fa2cddb4accd3dabcf79f6a27380f5d72af8d1a7f4d9ba92c4c6149782a150c4a34bf26346220a72e420cb6616c'
            '7354cbf22ff7326fbcd74079b8ec672afbf96ad8e5e638da16589a1262f0f383f5154a9cd1e2397f3bc9c617373098f1f8247f8ab9ffe104509a1ffd9f4e829d'
            '553e024ecf8d22e13724ab08846e3ec6009ea2fc37584c12e98cf009af19ba937ddfa0fe59585a0fccde2f95193871702f844f4b75bb378749d114d79eeaea29'
            '7ed8519ddc9e414ccdf07d3081c5cbe1e19639db92df9f106c6e598d2322405319ccc3acb06287546822f2bf677009f92fe2e246db9cf1b056bdb25651be8d08'
            '9191fbe9c313321a3b9e392d5ef44518af422ae0d7fc4f3ef34d30e1486da5403f2ac8682dc21c5f944b7d4598f899ed898f1e1d298501b4966997dcacf307b6'
            '2dd01e05097ada099f8c9e9477f6c7aaee6e472c9ca3d7f52677dc6595ee49191d63a1d0f46ed103ef4def92fb80cbab7bee5929bfe4ef67060c4d69cf6da107'
            '87d06b528a14ed2e67adcd022d1236a426e3e6a73a45663b3d22ffe7bc05d6026dad2772b2e90056a479eae3e20a9a379a61c31aac6369d4f93474a168b9a292'
            '7f158bed6957e5285ce45a480f6a222065af5427bd48481ef24eb770ff540aa67b2d1c1ed976d216db94323017f7c7ee1dfe16e3f222b14189f9823e0b49f0f3'
            '2c9bdefe7d022be139e7aec2e5f1cc1f83ea9d35d2c945e26422e140027b5107ce32c56f0b97e7dbf6b6edb282075df4a18c156a6ed6b064bcb10a3b4481a9aa'
            '07860198b7d40726e9597f9ac748904a8e27bdcf87151f0b1c8c2ade024ad16aa83d412b70f900a7de3f58773f325ee45eb6c30cb1395e45a4d8092a19b4f845')

# -- Forge Installer -- #
if [ "$_minecraft_ver_minor" = 7 ]; then
	source+=("forge-${_pkgver}-installer.jar"::"https://files.minecraftforge.net/maven/net/minecraftforge/forge/${_pkgver}-${_minecraft_ver}/forge-${_pkgver}-${_minecraft_ver}-installer.jar")
else
	source+=("forge-${_pkgver}-installer.jar"::"https://files.minecraftforge.net/maven/net/minecraftforge/forge/${_pkgver}/forge-${_pkgver}-installer.jar")
fi

[ "$_minecraft_ver_minor" = 5 ] && source+=("https://files.minecraftforge.net/fmllibs/fml_libs15.zip") && noextract+=("fml_libs15.zip")
# -- /Forge Installer -- #

# -- Licenses -- #
_licenses=()
_license_suffix="-${pkgname}-${_pkgver}.txt"

if [ "$_minecraft_ver_minor" -ge 10 ]; then
	_branch="${_minecraft_ver_major}.${_minecraft_ver_minor}.x"
elif [ "$_minecraft_ver_minor" -ge 7 ]; then
	_branch="$_minecraft_ver"
elif [ "$_minecraft_ver_minor" = 6 ]; then
	_branch="1.6"
else
	_branch="v7.9"
fi

_add_license() {
	_path=$1
	_repo=${2:-MinecraftForge}
	_github_branch=${3:-"$_branch"}
	_filename="$(basename "$_path")${_license_suffix}"

	_licenses+=("$_filename")
	source+=("$_filename"::"https://raw.githubusercontent.com/MinecraftForge/${_repo}/${_github_branch}/${_path}.txt")
}

if [ "$_minecraft_ver_minor" -ge 13 ]; then
	_add_license "LICENSE"
elif [ "$_minecraft_ver_minor" = 12 ]; then
	_add_license "LICENSE-Paulscode%20IBXM%20Library"
	_add_license "LICENSE-Paulscode%20SoundSystem%20CodecIBXM"
	_add_license "LICENSE"
elif [ "$_minecraft_ver_minor" -ge 7 ]; then
	_add_license "MinecraftForge-License"
	_add_license "Paulscode%20IBXM%20Library%20License"
	_add_license "Paulscode%20SoundSystem%20CodecIBXM%20License"

	case "$_minecraft_ver_minor" in
		8) _add_license "LICENSE-fml";;
		7) _add_license "fml/LICENSE-fml";;
		*) _add_license "LICENSE-fml" && _add_license "LICENSE-new";;
	esac
elif [ "$_minecraft_ver_minor" = 6 ]; then
	_add_license "install/MinecraftForge-License"
	_add_license "install/Paulscode%20IBXM%20Library%20License"
	_add_license "install/Paulscode%20SoundSystem%20CodecIBXM%20License"
	_add_license "LICENSE-fml" "FML" "902772ed0cb6c22c4cd7ad9b0ec7a02961b5e016"
else
	_add_license "LICENSE-fml"
fi
# -- /Licenses -- #

prepare() {
	[ "$_minecraft_ver_minor" = 10 ] && mkdir mods
	[ "$_minecraft_ver_minor" = 5 ] && unzip fml_libs15.zip -d lib
	java -jar "forge-${_pkgver}-installer.jar" --installServer
}

package() {
	_server_root="${pkgdir}/srv/${_forge_name}"

	# Install forged
	install -Dm644 "forged-backup.service" "${pkgdir}/usr/lib/systemd/system/${_forge_name}d-backup.service"
	install -Dm644 "forged-backup.timer" "${pkgdir}/usr/lib/systemd/system/${_forge_name}d-backup.timer"
	install -Dm644 "forged.service" "${pkgdir}/usr/lib/systemd/system/${_forge_name}d.service"
	install -Dm644 "forged.conf" "${pkgdir}/etc/conf.d/${_forge_name}"
	install -Dm755 "forged.sh" "${pkgdir}/usr/bin/${_forge_name}d"

	# Install Forge
	_forge_jar="forge-${_pkgver}.jar"
	[ "$_minecraft_ver_minor" -le 12 ] && _forge_jar="forge-${_pkgver}-universal.jar"
	[ "$_minecraft_ver_minor" = 7 ] && _forge_jar="forge-${_pkgver}-${_minecraft_ver}-universal.jar"
	[ "$_minecraft_ver_minor" -le 6 ] && _forge_jar="minecraftforge-universal-${_pkgver}.jar"

	install -Dm644 "$_forge_jar" "${_server_root}/$_forge_jar"
	ln -s "$_forge_jar" "${_server_root}/forge.jar"
	find libraries -type f -print0 | xargs -0 -i@ install -Dm644 "@" "${_server_root}/@"
	[ "$_minecraft_ver_minor" = 5 ] && find lib -type f -print0 | xargs -0 -i@ install -Dm644 "@" "${_server_root}/@"

	# Install Minecraft Server (for 1.12.2 or lower)
	if [ "$_minecraft_ver_minor" = 5 ]; then
		install -Dm644 "minecraft_server.${_minecraft_ver}.jar" "${_server_root}/minecraft_server.jar"
	elif [ "$_minecraft_ver_minor" -le 12 ]; then
		install -Dm644 "minecraft_server.${_minecraft_ver}.jar" "${_server_root}/minecraft_server.${_minecraft_ver}.jar"
	fi

	# Link log files
	mkdir -p "${pkgdir}/var/log/"
	install -dm2755 "${_server_root}/logs"
	ln -s "/srv/${_forge_name}/logs" "${pkgdir}/var/log/${_forge_name}"

	# Install licenses
	for _license in "${_licenses[@]}"; do
		_filename="$(basename "$_license" "$_license_suffix").txt"
		_filename="${_filename//\%20/ }"
		install -Dm644 "$_license" "${pkgdir}/usr/share/licenses/${pkgname}/$_filename"
	done

	chmod g+ws "${_server_root}"
}
