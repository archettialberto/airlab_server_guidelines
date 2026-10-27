#!/usr/bin/env bash
#SBATCH --job-name=bulk-example
#SBATCH --partition=bulk
#SBATCH --nodes=1
#SBATCH --gres=gpu:2
#SBATCH --comment=vram=40G
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=32G
#SBATCH --time=2-00:00:00
#SBATCH --requeue
#SBATCH --mail-type=REQUEUE,FAIL
#SBATCH --output=bulk-%j.out
set -euo pipefail
# Add --mail-user=YOUR_ADDRESS if not provided by your site's account setup.
# Supply this project script: it must checkpoint periodically and resume safely
# on EVERY invocation. Slurm requeue restarts this batch file from the beginning.
# The script must also configure your application's two-GPU execution.
srun bash ./train_with_checkpoint_resume.sh
