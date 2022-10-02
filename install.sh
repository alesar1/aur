_pkgname=cdhist

post_install() {
	echo -ne "\e[34;1m"
	echo "=== INSTALLATION NOTES for $_pkgname ==="
	echo -ne "\e[39;1m"
	echo "Users should add \". <(cdhist -i)\" to their \$HOME/.bashrc."
	echo "See complete instructions at https://github.com/bulletmark/cdhist."
	echo -ne "\e[0m"
}
